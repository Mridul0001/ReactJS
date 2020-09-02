import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const element = (
    <div>
      <h3>Hello! {props.name}</h3>
    </div>
  )
  return (
    element
  );
}

export default App;
