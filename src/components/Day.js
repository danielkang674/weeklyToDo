import React, { Component } from 'react';
import AddToDo from './AddToDo';
import { getTodoDbService, deleteTodoService } from '../services/dbService.js';
import Todo from './Todo';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
    this.getTodoFromDB = this.getTodoFromDB.bind(this);
    this.todoEventHandler = this.todoEventHandler.bind(this);
  }

  async getTodoFromDB(day) {
    const todos = await getTodoDbService(day);
    this.setState({ todos }, () => this.props.changeCurrDay(this.props.day));
  }

  async todoEventHandler(e, id) {
    if (e === 'O') {
      await deleteTodoService(id);
      this.getTodoFromDB(this.props.day);
    }
  }

  renderTodosAndInput(day, currDay) {
    if (day === currDay) {
      return (
        <>
          <AddToDo day={day} getTodoFromDB={this.getTodoFromDB}></AddToDo>
          {this.state.todos.map(todo => <Todo todoEventHandler={this.todoEventHandler} todo={todo} key={todo.id}></Todo>)}
        </>
      );
    }
  }

  render() {
    const { day, currDay } = this.props;
    return (
      <div>
        <h1 onClick={() => this.getTodoFromDB(day)}>{day}</h1>
        {this.renderTodosAndInput(day, currDay)}
      </div>
    );
  }
}

export default Day;