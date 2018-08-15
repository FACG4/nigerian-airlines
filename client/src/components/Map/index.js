import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import "./map.css";
class Map extends Component {
  render() {
    const { markers, zoom, center } = this.props;
    return (
      <div className="map-style">
        <GoogleMap defaultZoom={zoom} defaultCenter={center}>
          {markers.map((marker, index) => (
            <Marker {...marker} key={index} />
          ))}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Map);
