import React, { Component } from 'react';
import Container from './Components/Container'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Container />
      </div>
      </Router>
    );
  }
}

export default App;