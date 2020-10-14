import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'
class App extends Component {
  state = {
    username: "Ronald"
  }
  handlerState = (event) => {
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <div >
        <UserInput username={this.state.username} changed={this.handlerState}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
