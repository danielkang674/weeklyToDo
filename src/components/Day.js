import React, { Component } from 'react';
import AddToDo from './AddToDo';
import { getTodoDbService } from '../services/dbService.js';
import Todo from './Todo';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
    this.getTodoFromDB = this.getTodoFromDB.bind(this);
  }

  async getTodoFromDB(day) {
    const todos = await getTodoDbService(day);
    this.setState({ todos }, () => this.props.changeCurrDay(this.props.day));
  }

  renderTodosAndInput(day, currDay) {
    if (day === currDay) {
      return (
        <>
          <AddToDo day={day} getTodoFromDB={this.getTodoFromDB}></AddToDo>
          {this.state.todos.map(todo => <Todo item={todo.item} key={todo.id}></Todo>)}
        </>
      );
    }
  }

  render() {
    const { day, currDay } = this.props;
    return (
      <div>
        <h1 onClick={() => this.getTodoFromDB(this.props.day)}>{this.props.day}</h1>
        {this.renderTodosAndInput(day, currDay)}
      </div>
    );
  }
}

export default Day;