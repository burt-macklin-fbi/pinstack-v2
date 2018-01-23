import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class Map extends Component {
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.google !== this.props.google || prevProps.quakes !== this.props.quakes) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 0, lng: 180},
        zoom: 2,
        gestureHandling: "cooperative",
        mapTypeId: 'terrain'
      })
      //create a new map: a google property
      this.map = new maps.Map(node, mapConfig);
      var heatmapData = [];

      this.props.markers.map( (marker) => {
        // let mag
        // if (quake.properties.mag < 5) { mag = 3 } else if (quake.properties.mag > 6) {mag = 10} else {mag = 5}
        // heatmapData.push({
          // loca0tion: new google.maps.LatLng(quake.geometry.coordinates[1], quake.geometry.coordinates[0])
          // weight: mag
        // })

        const gaMarker = new google.maps.Marker({
          position: {lat: marker.geometry.coordinates[1], lng: marker.geometry.coordinates[0]},
          map: this.map,
          title: marker.properties.title,
          icon: {
            url: "https://cdn3.iconfinder.com/data/icons/earthquake/500/earthquake-24-32.png"
          }
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<h3>${marker.properties.title}</h3>
          <h4>${(new Date(marker.properties.time)).toDateString()}
          at depth of ${marker.geometry.coordinates[2]} km</h4>
          <a href=${marker.properties.url} target="_blank">More Info</a>`
        });
        gaMarker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
      })
      // const heatmap = new google.maps.visualization.HeatmapLayer({
      //   data: heatmapData,
      //   radius: 40
      // });
      // heatmapData.setMap(this.map);
    }
  }

  render() {
    const style = {
      width: '100%',
      height: '75vh'
    }

    return (
      <section className="map-container">
        <div className="search-box">

          <input type="search" className="search-input"/>
        </div>
        <div ref="map" style={style} className="mappy">
          loading map...
        </div>
      </section>
    )
  }
}