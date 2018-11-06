import React from 'react';
import logo from '../logo.svg';
import '../css/Todo.css';

const Todo = ({ todoEventHandler, ...props }) => {
  const { id, item } = props.todo;
  return (
    <div>
      <span className="item">{item}</span>
      <button>X</button>
      <button onClick={() => todoEventHandler('O', id)}>O</button>
      <button>Triangle</button>
      <img src={logo} className="App-logo" alt="logo" />
    </div >
  );
};

export default Todo;