import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.item}
        <button>X</button>
        <button>O</button>
        <button>Triangle</button>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Todo;