import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import './ListItem.scss';

const ListItem = (props) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(props.content);
  const primaryColor = useSelector(state => state.colors.primary);

  const handleDoubleClick = (e) => {
    e.stopPropagation();

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

  const handleBlur = () => {
    let li = document.getElementById(props.id);
    dispatch(actions.setListItem({
      listId: props.listId,
      index: props.index,
      content: li.innerText
    }));
  }

  return (
    <li className="list-item" id={props.id} onBlur={handleBlur} onDoubleClick={handleDoubleClick} style={{color: primaryColor}}>
      {content}
    </li>
  );
}

export default ListItem;
