//PLUGINS
import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; ///previous setup ???
import { HashRouter, NavLink, Route } from 'react-router-dom';

//VIEWS 
import Container from './Components/Container';
import Explore from './Components/Explore';
import CreateMap from './Components/CreateMap';
import MyAccount from './Components/MyAccount';

//STYLE
import './App.css';

//DATEBASE 
import base from './base';

//ASSETS
import markerIcon from './assets/marker.svg'

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		markers: { }
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
  render() {
    return (
 		<HashRouter>
		    <div className="App">
			    <header className="header">
		          <ul className="navgroup">
		            <li className="navgroup__item"><NavLink to="/explore">Explore</NavLink></li>
		            <li className="navgroup__item">Share</li>
		            <li className="navgroup__item logo"><NavLink to="/">P<img className="marker-icon" src={markerIcon}/>nStack</NavLink></li>
		            <li className="navgroup__item"><NavLink to="/create-map">Create Map</NavLink></li>
		            <li className="navgroup__item"><NavLink to="/my-account">Sign In</NavLink></li>
		          </ul>
		          <div className="search-box">

			        <input type="search" className="search-input"/>
			      </div>
		        </header>
		        <div className="wrapper">
		        	<Route path="/explore" component={Explore} />
		        	<Route path="/create-map" component={CreateMap} />
		        	<Route path="/my-account" component={MyAccount} />
			      	<Container />
			      {/*<Route path="/" component={App} /> <- This Route breaks it for some reason, causes an overload to the callstack 
			      <Route path="/explore" component={Explore} />
			      <Route path="/create-map" component={CreateMap} />
			      <Route path="/my-account" component={MyAccount} />*/}
			    </div>
		     </div>
    	</HashRouter>
    );
  }
}

export default App;