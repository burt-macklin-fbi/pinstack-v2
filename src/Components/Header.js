import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//ASSETS
import markerIcon from '../assets/marker.svg'

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

class Header extends Component {
	render() {
		return (
			<header className="header">
				<Navigation />
		    </header>
		);
	}
}

export default Header;