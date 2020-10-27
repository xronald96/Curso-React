import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from './components/Cockpit/Cockpit';
import Persons from './components/Persons/Persons'
class App extends Component {
  constructor(props) {
    super(props);
    console.log('this constructr App.js')
  }

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manue', age: 23 }
    ],
    showPersons: false,
    showCockpit: true
  }
  deletePersonHangler = (index) => {
    let arrayP = [...this.state.persons];
    arrayP.splice(index, 1)
    this.setState({ persons: arrayP })
  }
  turningPersons = () => {
    const value = this.state.showPersons
    this.setState({ ...this.state, showPersons: !value })
  }
  newChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Cristina', age: 23 }
      ],
    })
  }
  render() {
    let persons = null;
    let styleButton = []
    if (this.state.showPersons) {
      persons = (<div>
        <Persons clicked={this.deletePersonHangler} changed={this.newChangedHandler} persons={this.state.persons}></Persons>
      </div>)
      styleButton.push('button-clicked')
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: !this.state.showCockpit })
        }}>Omitir Cockpit</button>
        {this.state.showCockpit ? <Cockpit clicked={this.turningPersons} personsLength={this.state.persons.length} showPersons={this.state.showPersons}></Cockpit> : null}
        {persons}
      </div>
    );
  }

}

export default App;

