import React from 'react'

import classes from './Cockpit.css';
const cockpit = (props) => {

  let assigment = []
  if (props.showPersons) {
    assigment.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assigment.push(classes.bold)
  }
  return (
    <div>
      <button onClick={() => props.switchNameHanhler('Maxii')}> Switch names </button>
      <button className={classes.estoEste} onClick={props.clicked}>Turn on/off</button>
      <p className={assigment.join(' ')}>This is really working</p>
    </div>
  );
}
export default cockpit;