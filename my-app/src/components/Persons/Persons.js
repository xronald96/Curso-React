import React, { Component } from 'react';
import Person from './Person/Person'
class Persons extends Component {

  componentWillUnmount() {
    console.log("[Persons.js] Desmontaje de todo ")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (this.props.persons !== nextProps.persons)
      return true;
    else
      return false;
  }
  render() {
    return (
      <div >
        {this.props.persons.map((it, index) => {
          return (<Person key={index}
            name={it.name}
            age={it.age}
            click={() => this.props.clicked(index)}
            changed={this.props.changed}
          />)
        })}
      </div>
    )
  }
}


export default Persons;