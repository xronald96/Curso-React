import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        Hola
        <Person name="Ronald" age="24" />
        <Person name="Juan" age="24">My hobbi</Person>
      </div>
    );
  }
}

export default App;
