//PLUGINS
import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; ///previous setup ???
import { NavLink, Switch, Route } from 'react-router-dom';

//VIEWS 
// import Explore from './Views/Explore';
import CreateMap from './Views/CreateMap';
import MyAccount from './Views/MyAccount';
import Home from './Views/Home';

import SampleMaps from './sample-maps';

//STYLE
import './css/style.css';

//DATEBASE 
import base from './base';

//ASSETS
import markerIcon from './assets/marker.svg'

const Navigation = () => (
	<nav>
		<ul className="navgroup">
		<li className="navgroup__item logo"><NavLink exact activeClassName="current" to='/'>P<img className="marker-icon" alt="i" src={markerIcon}/>nStack</NavLink></li>
		<li className="navgroup__item"><NavLink exact activeClassName="current" to='/my-account'>My Account</NavLink></li>
		<li className="navgroup__item"><NavLink exact activeClassName="current" to='/explore'>Explore</NavLink></li>
		<li className="navgroup__item"><NavLink exact activeClassName="current" to='/create-map'>Create Map</NavLink></li>
	  </ul>
	</nav>
);

const Home = () => (
	<div className='home'>
	  <h1>Welcome to my portfolio website</h1>
	  <p> Feel free to browse around and learn more about me.</p>
	</div>
);
  
const Explore = () => (
	<div className='explore'>
	  <h1>Explore</h1>
	  <p>You can reach me via email: <strong>hello@example.com</strong></p>
	</div>
);

const Main = () => (
	<Switch>
	  <Route exact path='/explore' component={Explore}></Route>
	  <Route exact path='/' component={Home}></Route>
	  <Route exact path='/create-map' component={CreateMap}></Route>
	  <Route exact path='/my-account' component={MyAccount}></Route>
	</Switch>
);

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
		<div className="App">
			<header className="header">
				<Navigation />
				<div className="search-box">
				<input type="search" className="search-input"/>
				</div>
			</header>
			<Main />
			{/* <main className="wrapper"> */}
				{/*<Route path="/" component={App}>
					<IndexRoute component={Explore} />
					<Route path="create-map" component={CreateMap} />
					<Route path="my-account" component={MyAccount} />
					<Route path="*" component={Explore} />
				</Route>*/}
				{/*<Container />*/}
				{/*<Route path="/" component={App} /> <- This Route breaks it for some reason, causes an overload to the callstack*/} 
				{/*<ul className="maps">
					<h2>Filters</h2>
					{
						Object
						.keys(this.state.markers)
						.map(key => <Explore key={key} details={this.state.markers[key]} />)
					}
				</ul>*/}

			{/* </main> */}
			<Router>
	        <Route exact path="/" component={Home}/>
    	</Router>
			</div>
    );
  }
}

export default App;