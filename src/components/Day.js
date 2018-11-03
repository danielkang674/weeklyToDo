import React, { Component } from 'react';
import AddToDo from './AddToDo';
import { getTodoDbService } from '../services/dbService.js';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
  }

  async getTodoFromDB(day) {
    const todos = await getTodoDbService(day);
    this.setState({ todos }, () => console.log(this.state.todos));
  }

  render() {
    const items = this.state.todos.length > 0 ? this.state.todos[0].item : ''
    return (
      <div>
        <h1 onClick={() => this.getTodoFromDB(this.props.day)}>{this.props.day}</h1>
        {this.state.todos.map(todo => <div>{todo.item}</div>)}
        <AddToDo day={this.props.day}></AddToDo>
      </div>
    );
  }
}

export default Day;