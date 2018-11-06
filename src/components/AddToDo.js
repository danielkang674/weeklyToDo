import React, { Component } from 'react';
import saveTodoDbService from '../services/dbService.js';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '', day: this.props.day };
    this.inputTodo = this.inputTodo.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputTodo(e) {
    this.setState({ todo: e.target.value });
  }

  selectDay(e) {
    this.setState({ day: e.target.value });
  }

  async submitTodo(e) {
    e.preventDefault();
    await saveTodoDbService({ todo: this.state.todo, day: this.state.day });
    this.setState({ todo: '' }, () => this.props.getTodoFromDB(this.state.day));
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitTodo(e)}>
        <input type="text" onChange={(e) => this.inputTodo(e)} value={this.state.todo}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default AddToDo;