import React, { Component } from 'react';

//ASSETS
import markerIcon from '../assets/marker.svg'


class Header extends Component {
	render() {
		return (
			<header className="header">
	          <ul className="navgroup">
	          	<li className="navgroup__item">Explore</li>
	          	<li className="navgroup__item">Share</li>
	          	<li className="navgroup__item logo">P<img className="marker-icon" alt="" src={markerIcon}/>nStack</li>
	          	<li className="navgroup__item">Create Map</li>
	          	<li className="navgroup__item">Sign In</li>
	          </ul>
		    </header>
		);
	}
}

export default Header;