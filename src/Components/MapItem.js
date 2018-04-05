import React, { Component } from 'react';

class MapItem extends Component {

	render() {
		//props don't load on initial render,
		//render JSX when they do
		if(this.props.map == null) return null;

		const { map } = this.props;

		return (
	        <section className="maps__map">
				<figure className="thumb">
					<img src={map.image} alt={map.title} />
					<figcaption>{map.description}</figcaption>
					<span>{map.keywords}</span>
				</figure>
	        </section>
		);
	}
}

export default MapItem;