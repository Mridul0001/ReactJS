import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const element = (
    <div>
      <h1>Ticking Clock</h1>
      <h3>It is {new Date().toLocaleTimeString()}.</h3>
    </div>
  )
  return (
    element
  );
}

export default App;
