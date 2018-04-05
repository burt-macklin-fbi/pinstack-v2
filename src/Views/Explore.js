import React, { Component } from 'react';

import MapItem from '../Components/MapItem';
import SeeMap from '../Components/SeeMap';

class Explore extends Component {
	constructor() {
		super();
		this.state = {
			isHidden: true
		}

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		console.log("I was clicked, YAY!");
		this.setState({
			isHidden: false
		})
	}

	render() {
		//props don't load on initial render,
		//render JSX when they do
		if(this.props.mapsList == null) return null;

		const { mapsList } = this.props;

		return (
			<div>
				
				{!this.state.isHidden ? (<SeeMap />) : (
					<ul className="maps">
					<h2>Filters</h2>
					{
						Object
						.keys(mapsList)
						.map(key => <MapItem key={key} map={mapsList[key]} openMap={this.clickHandler}/>)
					}
				</ul>
				)}
			</div>
		);
	}
}

export default Explore;