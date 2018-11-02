import React, { Component } from 'react';
import AddToDo from './AddToDo';
class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
  }

  render() {
    return (
      <div>
        <h1>{this.props.day}</h1>
        <AddToDo day={this.props.day}></AddToDo>
      </div>
    );
  }
}

export default Day;