import React, { Component } from 'react';


class CreateMarker extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.onFilter(event)

    // var map, infoWindow;
    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 6
    //   });
    //   infoWindow = new google.maps.InfoWindow;

    //   // Try HTML5 geolocation.
    //   if(navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       var pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };

    //       infoWindow.setPosition(pos);
    //       infoWindow.setContent('Location found.');
    //       infoWindow.open(map);
    //       map.setCenter(pos);
    //     }, function() {
    //       handleLocationError(true, infoWindow, map.getCenter());
    //     });
    //   } else {
    //     // Browser doesn't support Geolocation
    //     handleLocationError(false, infoWindow, map.getCenter());
    //   }
    // }

    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(browserHasGeolocation ?
    //     'Error: The Geolocation service failed.' :
    //     'Error: Your browser doesn\'t support geolocation.');
    //   infoWindow.open(map);
    // }
  }

  render() {
    return(
      <div>
        <h3>Create Marker</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="filter-column">Find Location</label><br/>
        <input type="submit" className="myButton"/>
      </form>
      </div>
    )
  }
}

export default CreateMarker