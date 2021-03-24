/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem';

const List = (props) => {
  const listData  = useSelector(state => state.lists[props.listId].data || []);
  const colors    = useSelector(state => state.colors);

  let items = listData.map((item, index) => {
    return <ListItem 
      listId={props.listId}
      id={`${props.listId + index}`}
      index={index}
      content={item}
      highlight={props.highlight}
    />
  });

  items.push(
    <ListItem 
      id={`${props.listId + items.length}`} 
      listId={props.listId} 
      index={items.length}
      content={""}
      highlight={props.highlight}
    />
  );

  const style = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 20%;
    height: 100%;
    border-right: 1px solid lightgray;

    h1, h6 {
      text-transform: uppercase;
      color: ${props.highlight ? colors.primary : 'black'}
    }
  
    h1 {
      font-size: 34px;
      margin-bottom: 5px;
      font-family: 'PathwayGothicOne';
      
    }
  
    h6 {
      font-size: 11px;
      font-family: 'Helvetica';
      margin-bottom: 30px;
    }
  
    ul {
      width: 100%;
      height: 100%;
      background-image: repeating-linear-gradient(transparent,transparent 22px,lightgray 22px,lightgray 23.23px,transparent 23.23px,transparent 25px);
    }
  `

  return (
    <div className="list" css={style}>
      <h1>{props.header}</h1>
      <h6>{props.subHeader}</h6>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default List;

