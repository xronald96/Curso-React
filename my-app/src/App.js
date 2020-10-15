import React, { Component } from 'react';
import './App.css';
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
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHanhler.bind(this, "Ronald")}
          changed={this.newChangedHandler}
        />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My hobbi
      </Person> */}
      </div>)
    }

    return (
      <div className="App">
        Hola
        <button onClick={() => this.switchNameHanhler('Maxii')}> Switch names </button>
        <button onClick={this.turningPersons}>Turn on/off</button>
        {persons}
      </div>
    );
  }

}

export default App;

