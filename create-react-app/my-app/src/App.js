import React from 'react';
import logo from './logo.svg';
import './App.css';

function ListItem(props){
  return (
    <div>
      <li>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </li>
    </div>
  );
}

class Blog extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul>
      {this.props.data.map((data) => (
        <ListItem key={data.id} title={data.title} content={data.content}/>
      ))}
      </ul>
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

export default Blog;
