import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day';
import AddToDo from './components/AddToDo';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Weekly Planner
        </header>
        <AddToDo></AddToDo>
        <Day></Day>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
