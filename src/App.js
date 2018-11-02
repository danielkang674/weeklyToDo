import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day';
// import dbUrl, { test, testfunc } from './config.js';
// console.log(dbUrl, test, testfunc);

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
        <Day day="Monday"></Day>
        <Day day="Tuesday"></Day>
        <Day day="Wednesday"></Day>
        <Day day="Thursday"></Day>
        <Day day="Friday"></Day>
        <Day day="Saturday"></Day>
        <Day day="Sunday"></Day>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
