import React, { Component } from 'react';
import Container from './Components/Container';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import base from './base';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		test: { }
  	};
  }
  componentWillMount() {
  	this.ref = base.syncState('test'
  		, {
  			context: this,
  			state: 'testyness'
  		});
  }
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