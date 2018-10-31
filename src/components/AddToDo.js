import React, { Component } from 'react';
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class AddToDo extends Component {
  constructor() {
    super();
    this.state = { todo: '', day: days[0] };
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
    console.log(this.state.todo, this.state.day);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitTodo(e)}>
        <label>
          Pick your day:
          <select value={this.state.day} onChange={(e) => this.selectDay(e)}>
            {days.map((el, i) => {
              return <option key={i} value={el}>{el}</option>
            })}
          </select>
        </label>
        <input type="text" onChange={(e) => this.inputTodo(e)}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default AddToDo;