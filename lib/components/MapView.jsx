import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  PropTypes as MapPropTypes,
} from 'react-leaflet';
import data from '../data.js'

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
};

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: 'none' }}>{items}</div>;
};
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
};

export default class MapView extends Component {

  state = {
    lat: 38.5,
    lng: -107.0,
    zoom: 7,
    data: data
  };
  
  loadMarkers() {
    var markers = [];
    for (var i = 0; i < this.state.data.length; i++) {
      markers.push(
        { key: `marker${i}`, position: [`${this.state.data[i].locationLatitude}`, `-${this.state.data[i].locationLongitude}`], children: `${this.state.data[i].name}, ${this.state.data[i].elevation} ft` },
      );
    }
    return markers
  }

  render() {
    
    const center = [this.state.lat, this.state.lng];
    const markers = this.loadMarkers()

  
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          url = "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FtYmxlY2MiLCJhIjoiY2ltcnYwb3pzMDE3M3Y3a2sxY3MyZmdhNCJ9.jhiY7nr5PpZ3SosSf16bIA"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}
