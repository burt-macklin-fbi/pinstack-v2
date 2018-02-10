import React, { Component } from 'react';
import SampleMaps from '../sample-maps.js';

class Explore extends Component {
	constructor() {
		super();

		this.loadMap = this.loadMap.bind(this);

		this.state = {
			maps: {}
		}
	}

	loadMap() {
		this.setState({
			maps: SampleMaps
		})
	}

	render() {
		return (
			<section className="explore-container">
		        <h2>Filters</h2>
		        <section className="thumb-container">
		        	{
		        		Object.keys(this.state.maps).map(key => <);
		        	}

		        	<figure className="thumb">
		        		<img src="" alt="" />
		        		<figcaption></figcaption>
		        		<span></span>
		        	</figure>
		        </section>
	      </section>
		);
	}
}

export default Explore;