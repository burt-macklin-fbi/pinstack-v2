import React, { Component } from 'react';

export default class Description extends Component {

        render() {
            return (
                <section className="map-info">
                    <label className="map-info__label">Map:</label>
                    <p className="map-info__copy">Bobcat-Richardson</p>
                    <label className="map-info__label">Owner:</label>
                    <p className="map-info__copy">MrMapSon</p>
                    <h1 className="map-title">Bobcat Sightings in Richardson, Texas</h1>
                    <p className="map-info__copy description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </section>
            );
        }
}