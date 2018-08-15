import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import "./map.css";
class Map extends Component {
  render() {
    // const markers = this.props.markers || [];
    console.log(this.props.markers);
    return (
      <div className="map-style">
        <GoogleMap
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          {this.props.markers.map((marker, index) => (
            <Marker {...marker} key={index} />
          ))}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Map);
