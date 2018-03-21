//PLUGINS
import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; ///previous setup ???
import { BrowserRouter as Router, Route } from 'react-router-dom';

//VIEWS 
// import Explore from './Views/Explore';
// import CreateMap from './Views/CreateMap';
// import MyAccount from './Views/MyAccount';
import Home from './Views/Home';

import SampleMaps from './sample-maps';

//STYLE
import './css/style.css';

//DATEBASE 
import base from './base';

class App extends Component {
  constructor() {
  	super();

  	this.loadMaps = this.loadMaps.bind(this);

  	this.state = {
  		markers: {}
  	};
  }

  componentWillMount() {
  	this.ref = base.syncState('test'
  		, {
  			context: this,
  			state: 'markers'
  		});
  }
  componentWilUnmount() {
  	//base.removeBinding(this.ref);
  }
  componentDidMount() {
  	window.addEventListener('load', this.loadMaps);
  }

  loadMaps() {
  	this.setState({
  		markers: SampleMaps
  	});
  }

  render() {

    return (
 		<Router>
	        <Route exact path="/" component={Home}/>
    	</Router>
    );
  }
}

export default App;