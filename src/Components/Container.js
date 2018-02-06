import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateMarker from './CreateMarker'
import Map from './Map'
import Description from './Description'
import { fetchMarkers } from '../Services/markers'
// import { searchQuakes } from '../Services/earthquakes'
import { GoogleApiWrapper } from 'google-maps-react'


class Container extends Component {

  state = {
    markers: []
  }

  componentDidMount = () => {
    // fetchMarkers()
    //   .then((json) => {
    //     this.setState({ quakes: json.features }, )
    // })
  }

  // onFilter = (event) => {
  //   searchQuakes(event)
  //     .then((json) => {
  //       this.setState({ quakes: json.features })
  //     })
  // }

  render() {
    return (
      <div className="Container">
          {/* <CreateMarker onFilter={this.onFilter}/> */}
          {/* <Route path="/" render={(props) => <CreateMarker google={this.props.google} {...props}/>} /> */}
          {/* <Route path="/" render={(props) => <Map google={this.props.google} markers={this.state.markers} {...props}/>} /> */}
          {/* <Description/> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(Container)