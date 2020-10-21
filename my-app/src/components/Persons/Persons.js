import React, { Component } from 'react';
import Person from './Person/Person'
class Persons extends Component {
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