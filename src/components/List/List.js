import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem';
import './List.scss';

const List = (props) => {
  const listData = useSelector(state => state.lists[props.listId].data || []);
  const primaryColor = useSelector(state => state.colors.primary);

  let items = listData.map((item, index) => {
    console.log(item)
    return <ListItem 
      listId={props.listId}
      id={`${props.listId + index}`}
      index={index}
      content={item}
    />
  });

  items.push(
    <ListItem 
      id={`${props.listId + items.length}`} 
      listId={props.listId} 
      index={items.length}
      content={""}
    />
  );

  return (
    <div className="list">
      <h1 style={{color: primaryColor}}>{props.header}</h1>
      <h6 style={{color: primaryColor}}>{props.subHeader}</h6>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default List;

