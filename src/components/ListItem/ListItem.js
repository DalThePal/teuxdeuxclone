/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

const ListItem = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.colors);

  const handleDoubleClick = (e) => {
    let li = document.getElementById(props.id);
    li.contentEditable = true;
    li.focus();
    li.addEventListener('keypress', e => {
      if (e.key === "Enter") {
        e.preventDefault();
        li.blur();
      }
    })
  }

  const handleOnClick = (e) => {
    dispatch(actions.setListItem({
      listId: props.listId,
      index: props.index,
      content: {
        text: props.content.text,
        completed: !props.content.completed
      }
    }));
  }

  const handleBlur = () => {
    let li = document.getElementById(props.id);
    let text = li.innerText;
    li.contentEditable = false;

    if (text === "") {
      dispatch(actions.removeListItem({
        listId: props.listId,
        index: props.index
      }));
    } else {
      dispatch(actions.setListItem({
        listId: props.listId,
        index: props.index,
        content: {
          text,
          completed: false
        }
      }));
    }

  }

  const listItemStyle = css({
    width           : '100%',
    padding         : '3px 0px',
    fontSize        : '12px',
    fontFamily      : 'Helvetica',
    height          : '25px',
    boxSizing       : 'border-box',
    cursor          : 'pointer',
    textDecoration  : props.content.completed ? 'line-through' : 'initial',
    color           : props.highlight ? colors.primary : 'black'
  });

  return (
    <li css={listItemStyle} id={props.id} onBlur={handleBlur} onDoubleClick={handleDoubleClick} onClick={handleOnClick}>
      {props.content.text}
    </li>
  );
}

export default ListItem;
