import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
class App extends Component {
  state = {
    input:""
  }
  changedInputListemer =(evt) =>{
    this.setState({
      input:evt.target.value
    })
  }
  render() {
    return (
      <div className="div">
       <input onChange={this.changedInputListemer} />
    <p> {this.state.input.length}</p>
    <ValidationComponent textLength= {this.state.input.length}></ValidationComponent>
      </div>
    );
  }
  
}

export default App;
