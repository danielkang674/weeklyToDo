import React, { Component } from 'react';
import './App.css';
import Day from './components/Day';
import { days } from './config.js';
// import dbUrl, { test, testfunc } from './config.js';
// console.log(dbUrl, test, testfunc);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currDay: null };
    this.changeCurrDay = this.changeCurrDay.bind(this);
  }

  changeCurrDay(day) {
    this.setState({ currDay: day });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Weekly Planner
        </header>
        {days.map((day, index) =>
          <Day day={day} currDay={this.state.currDay} changeCurrDay={this.changeCurrDay} key={index}></Day>
        )}
      </div>
    );
  }
}

export default App;
