import React, { Component } from 'react';
import AddToDo from './AddToDo';
import { getTodoDbService } from '../services/dbService.js';
import Todo from './Todo';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
  }

  async getTodoFromDB(day) {
    const todos = await getTodoDbService(day);
    this.setState({ todos }, () => this.props.changeCurrDay(this.props.day));
  }

  renderTodosAndInput() {
    if (this.props.day === this.props.currDay) {
      return (
        <>
          <AddToDo day={this.props.day}></AddToDo>
          {this.state.todos.map(todo => <Todo item={todo.item} key={todo.id}></Todo>)}
        </>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.getTodoFromDB(this.props.day)}>{this.props.day}</h1>
        {this.renderTodosAndInput()}
      </div>
    );
  }
}

export default Day;