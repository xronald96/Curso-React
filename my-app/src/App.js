import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manue', age: 23 }
    ]
  })
  const switchNameHanhler = (newName) => {
    // console.log('Was Clickce')
    // Dont do thiis  !!! .state.persons[0].name="Ronald"
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Cristina', age: 23 }
      ]
    })
  }
  return (
    <div className="App">
      Hola
      <button onClick={switchNameHanhler.bind(this, 'Maxii')}>Switch names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHanhler.bind(this, "Ronald")}
      />
      <Person name={personsState.persons[1].name}
        age={personsState.persons[1].age}>My hobbi</Person>
    </div>
  );
}

export default app;

