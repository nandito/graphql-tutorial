import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ChannelList = () => (
  <ul>
    <li>Channel1</li>
    <li>Channel2</li>
  </ul>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Apollo</h2>
        </div>
        <ChannelList />
      </div>
    );
  }
}

export default App;
