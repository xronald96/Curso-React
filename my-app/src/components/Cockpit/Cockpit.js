import React, { useEffect } from 'react'

import classes from './Cockpit.css';
const cockpit = (props) => {
  useEffect(() => {
    setTimeout(() => {
      alert("Saved to cloud")
    });
    console.log('Entro en el use effect')
    return () => {
      console.log("Esto es para limpiar despues que desaparezca si pasamos array vacio.")
    }
  }, []) // array vacio indica ejecucion uan solal vez , props.person indica ejecucion siempre que cambie eso array

  useEffect(() => {
    console.log('Segundo useEffect')
  }) // array vacio indica ejecucion uan solal vez , props.person indica ejecucion siempre que cambie eso array
  let assigment = []
  if (props.showPersons) {
    assigment.push(classes.red)
  }
  if (props.personsLength <= 1) {
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
export default React.memo(cockpit);