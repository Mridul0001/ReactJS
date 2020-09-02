import React from 'react';
import logo from './logo.svg';
import './App.css';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isON: false};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    this.setState(state => ({
      isON: !state.isON
    }));
  }

  render() {
    return (
      <button onClick = {this.handleClick}>{this.state.isON ? 'ON' : 'OFF'}
      </button>
    )
  };
}

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

export default Toggle;
