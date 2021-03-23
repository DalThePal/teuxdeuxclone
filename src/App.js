import React from 'react';
import {useSelector} from 'react-redux';
import './App.scss';
import Header from './components/Header';
import Week from './components/Week';

const App = () => {
  const secondayColor = useSelector(state => state.colors.secondary);

  return (
    <div className="App" style={{backgroundColor: secondayColor}}>
      <Header/>
      <Week/>
    </div>
  );
}

export default App;
