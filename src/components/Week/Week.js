/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import moment from 'moment';
import List from '../List';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';
import { findAllByDisplayValue } from '@testing-library/dom';

const Week = (props) => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const initLists = () => {
    let newLists = merge({}, lists);
    let today   = moment();
    let oldData = [];

    for (let i = -1; i < 5; i++) {
      let day = moment().add(i, 'days');
      let listId = day.dayOfYear();

      let newListObj = {
        listId,
        header: day.format('dddd'),
        subHeader: day.format('MMMM D, yyyy'),
        data: lists[listId]?.data || [],
        highlight: false
      }

      let indicesDelete = [];

      if (day.isBefore(today)) {
        newListObj.data.forEach((item, index) => {
          if (!item.completed) {
            oldData.push(item);
            indicesDelete.push(index);
          }
        });

        indicesDelete.forEach((index) => {
          newListObj.data.splice(index, 1);
        })
      } else if (day.dayOfYear() === today.dayOfYear()) {
        newListObj.data = [...newListObj.data, ...oldData];
        newListObj.highlight = true;
      }

      newLists[listId] = newListObj;
     
      dispatch(actions.setAllLists(newLists));
    }
  }

  useEffect(() => {
    initLists();
  }, []);

  const style = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px - 36px);
    padding-top: 80px;
  `

  let listElems = Object.keys(lists).map((item, index, arr) => {
    let today = moment().dayOfYear();

    if (item >= today - 1 && item < today + 4) {
      return <List
        listId={item}
        header={lists[item].header}
        subHeader={lists[item].subHeader}
        highlight={lists[item].highlight}
      />
    }
  })

  return (
    <div css={style}>
      {listElems}
    </div>
  );
}

export default Week;
