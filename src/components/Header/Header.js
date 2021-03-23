import React from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const colors = useSelector(state => state.colors);

  const style = {
    color: "white",
    backgroundColor: colors.primary,
    width: '100%',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0px 64px',
    fontFamily: "PathwayGothicOne",
    boxSizing: 'border-box'
  }

  return (
    <header style={style}>
      <p>TEUXDEUXCLONE</p>
    </header>
  );
}

export default Header;
