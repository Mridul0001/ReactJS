import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return (
    <h1>Welcome {props.name}!</h1>
  );
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}

function Delete(props){
  return (
    <button onClick={props.onClick}>Delete Everything</button>
  );
}

class Display extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLoginClick = this.handleLogicClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false, isDeleted: false};
  }

  handleDelete(){
    this.setState({isDeleted: true});
  }

  handleLogicClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = isLoggedIn ?  <LogoutButton onClick={this.handleLogoutClick}/> : <LoginButton onClick={this.handleLoginClick}/>
    let greet = isLoggedIn ? <Welcome name="Mridul" /> : <Welcome name="Guest" />
    let del = <Delete onClick={this.handleDelete} />;
    if(this.state.isDeleted){
      return null;
    }

    return (
      <div>
        {button}
        {greet}
        {del}
      </div>
    );
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

export default Display;
