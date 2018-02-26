//PLUGINS
import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; ///previous setup ???
import { HashRouter, NavLink, Route } from 'react-router-dom';

//VIEWS 
import Container from './Components/Container';
import Explore from './Components/Explore';
import CreateMap from './Components/CreateMap';
import MyAccount from './Components/MyAccount';

import SampleMaps from './sample-maps';

//STYLE
import './css/style.css';

//DATEBASE 
import base from './base';

//ASSETS
import markerIcon from './assets/marker.svg'

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
  	// console.log(this.state.markers);
  	const contents = Object
  					.keys(this.state.markers)
			      	.map(key => 

			      		<figure className="thumb" key={key}>
			      			<img src={this.state.markers[key].image} alt={this.state.markers[key].title} />
			      			<figcaption>{this.state.markers[key].description}</figcaption>
	        				<span>{this.state.markers[key].keywords}</span>
			      		</figure>
			      	)
	console.log(contents);
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
		        <main className="wrapper">
		        	<Route path="/explore" component={Explore} />
		        	<Route path="/create-map" component={CreateMap} />
		        	<Route path="/my-account" component={MyAccount} />
			      	<Container />
			      {/*<Route path="/" component={App} /> <- This Route breaks it for some reason, causes an overload to the callstack*/} 

			      <ul className="maps">
		        	<h2>Filters</h2>
		        	{contents}
			      	{/*	
			      		Object
			      		.keys(this.state.markers)
			      		.map(key => <Explore key={key} info={this.state.markers[key]} />)
			      	*/}
			      </ul>
			    </main>
		     </div>
    	</HashRouter>
    );
  }
}

export default App;