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
  newChangedHandler = (event, index) => {
    const p =  {...this.state.persons[index]}; // hace uuna copia del objeto persona
    p.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index]= p;
    this.setState({
      persons
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
              changed={(evt)=>this.newChangedHandler(evt, index)}
            />)
          })
        }
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

