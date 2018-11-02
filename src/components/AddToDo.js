import React, { Component } from 'react';
import db from '../services/dbService.js';

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

  submitTodo(e) {
    e.preventDefault();
    db.saveTodoDB({ todo: this.state.todo, day: this.state.day });
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitTodo(e)}>
        <input type="text" onChange={(e) => this.inputTodo(e)}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default AddToDo;