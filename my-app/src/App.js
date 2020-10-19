import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manue', age: 23 }
    ],
    showPersons: false
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
    let assigment = []
    let styleButton = []
    if (this.state.showPersons) {
      persons = (<div>
        {
          this.state.persons.map((it, index) => {
            return (<Person key={index}
              name={it.name}
              age={it.age}
              click={() => this.deletePersonHangler(index)}
              changed={this.newChangedHandler}
            />)
          })
        }
      </div>)
      assigment.push(classes.red)
      styleButton.push('button-clicked')
    }
    if (this.state.persons.length <= 1) {
      assigment.push(classes.bold)
    }

    return (
      <div className={classes.App}>

        <button onClick={() => this.switchNameHanhler('Maxii')}> Switch names </button>
        <button className={classes.estoEste} onClick={this.turningPersons}>Turn on/off</button>
        <p className={assigment.join(' ')}>This is really working</p>
        {persons}
      </div>
    );
  }

}

export default App;

