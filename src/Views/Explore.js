import React, { Component } from 'react';

import MapItem from '../Components/MapItem';

class Explore extends Component {

	render() {
		//props don't load on initial render,
		//render JSX when they do
		if(this.props.mapsList == null) return null;

		const { mapsList } = this.props;

		return (
			<ul className="maps">
				<h2>Filters</h2>
				{
					Object
					.keys(mapsList)
					.map(key => <MapItem key={key} map={mapsList[key]} />)
				}
			</ul>
		);
	}
}

export default Explore;