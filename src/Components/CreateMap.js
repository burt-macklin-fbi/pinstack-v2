import React, { Component } from 'react';

class CreateMap extends Component {
	render() {
		return (
		  <div>
        <h2>Create Map</h2>
        <form className="create-map--form">
        	<fieldset>
        		<legend>Name and describe your map</legend>
        		<div>
        			<label>Name<abbr title="required">*</abbr></label>
        			<input id="map-name" type="text" name="mapname"/>
        		</div>
        		<div>
        			<label>Keywords</label>
        			<input id="map-keywords" type="text" name="keywords"/>
        		</div>
        		<div>
        			<label>Description<abbr title="required">*</abbr></label>
        			<textarea id="map-description" type="text" name="description"></textarea>
        		</div>
        	</fieldset>
        	<button type="submit">Next</button>
        </form>
	    </div>
		);
	}
}

export default CreateMap;