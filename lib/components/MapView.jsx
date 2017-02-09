import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
const position = [38.5, -107.0]

class MapView extends Component {



render() {

    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
					zoom= {7}
					scrollWheelZoom = {false}
					>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/gamblecc/ciyx8t558001r2sjyv3u24g7m/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FtYmxlY2MiLCJhIjoiY2ltcnYwb3pzMDE3M3Y3a2sxY3MyZmdhNCJ9.jhiY7nr5PpZ3SosSf16bIA"
					/>
        </Map>
      </div>
    )
  }
}

export default MapView;
