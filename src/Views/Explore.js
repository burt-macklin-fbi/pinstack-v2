import React, { Component } from 'react';

class Explore extends Component {

	render() {
		//props don't load on initial render,
		//render JSX when they do
		// if(this.props.details == null) return null;

		// const { details } = this.props;
		
		return (
	        <section className="maps__map">
	        	<figure className="thumb">
	        		{/*<img src={details.image} alt={details.title} />
	        		<figcaption>{details.description}</figcaption>
	        		<span>{details.keywords}</span>*/}
	        		<p>I'm EXPLORE page!</p>
	        	</figure>
	        </section>
		);
	}
}

export default Explore;