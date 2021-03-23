import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import './Week.scss';
import moment from 'moment';
import List from '../List';
import isEmpty from 'lodash/isEmpty';

const Week = (props) => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const initLists = () => {

    for (let i = -1; i < 4; i++) {
      let day = moment().add(i, 'days');
     
      dispatch(actions.setList({
        listId: day.dayOfYear(),
        header: day.format('dddd'),
        subHeader: day.format('MMMM D, yyyy'),
        data: []
      }));
    }
  }

  useEffect(() => {
    console.log(lists)
    if (isEmpty(lists)) {
      initLists();
    }
  }, []);


  let listElems = Object.keys(lists).map((item, index, arr) => {
    return <List
      listId={item}
      header={lists[item].header}
      subHeader={lists[item].subHeader}
    />
  })

  return (
    <div className="week">
      {listElems}
    </div>
  );
}

export default Week;
