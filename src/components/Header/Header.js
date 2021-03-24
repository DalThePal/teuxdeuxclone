/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { isMobile } from 'react-device-detect';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

const Header = (props) => {
  const colors  = useSelector(state => state.colors);
  const user    = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);

  const style = css({
    color           : "white",
    backgroundColor : colors.primary,
    width           : '100%',
    height          : '36px',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'space-between',
    padding         : isMobile ? '0px 30px': '0px 64px',
    fontFamily      : "PathwayGothicOne",
    boxSizing       : 'border-box',
    textTransform   : 'uppercase',
    position        : 'relative'
  });

  return (
    <header css={style}>
      <p>TEUXDEUXCLONE</p>
      <p onClick={() => setVisible(!visible)}>{user.name || "USER"}</p>
      {visible && <UserForm user={user} colors={colors}/>}
    </header>
  );
}

const UserForm = (props) => {
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    switch(key) {
      case "username":
        dispatch(actions.setUsername(value));
        break;

      case "primary":
        dispatch(actions.setPrimaryColor(value));
        break;

      default:
        break;
    }
  }

  const style = css({
    position: 'absolute',
    zIndex: '9',
    right: '0px',
    top: '36px',
    padding: '10px',
    paddingBottom: '5px',
    paddingTop: '5px',
    display: 'flex',
    flexDirection: 'column'
  });

  const inputStyle = css({
    fontFamily: "PathwayGothicOne",
    textTransform: 'uppercase',
    marginBottom: '5px',
  });

  return (
    <div css={style}>
      <input css={inputStyle} value={props.user.name} placeholder="username" onChange={(e) => handleChange('username', e.target.value)}/>
      <input css={inputStyle} value={props.colors.primary} placeholder="primary color" onChange={(e) => handleChange('primary', e.target.value)}/>
    </div>
  );
}

export default Header;
