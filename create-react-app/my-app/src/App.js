import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){
    return (
      <h1>Time is {this.state.date.toLocaleTimeString()}.</h1>
    )
  }
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

export default Clock;
