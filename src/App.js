/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        <h1><b>Counter Demo</b></h1>
        <h2><b>Counter: {this.state.count}</b></h2>
        <br />
        <Button sign="Increment Counter" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="Decrement Counter" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;

