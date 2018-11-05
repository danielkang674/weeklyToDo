import React from 'react';
import logo from '../logo.svg';
import '../css/Todo.css';

const Todo = ({ item }) => (
  <div>
    {item}
    <button>X</button>
    <button>O</button>
    <button>Triangle</button>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

export default Todo;