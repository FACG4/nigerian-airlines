import React, { Component } from "react";

import {
  CustomerPageNavBar,
  Tabs,
  DetailsCard,
  Map
} from "../../../components";
import "./flightmap.css";

class FlightMap extends Component {
  state = {
    flightInformation: {}
  };

  componentDidMount() {
    const flightNo = sessionStorage.getItem("flight_no");
    const data = JSON.stringify({
      flightNo
    });
    fetch("/api/v1/get_flight_details", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          flightInformation: response.data
        });
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  }

  render() {
    const {
      origin,
      destination,
      flight_no,
      flight_duration,
      departure_time,
      aircraft
    } = this.state.flightInformation;

    return (
      <div className="map-container">
        <CustomerPageNavBar />
        <Tabs classNameroute="flight-route-style" />
        <DetailsCard
          adminPanel={false}
          detailsTitle={flight_no}
          detailsInfoArray={{ departure_time, flight_duration, aircraft }}
        />
        <hr className="style" />
        <div className="div-label-container">
          <label>{origin}</label>
          &nbsp;-&nbsp;
          <label>{destination}</label>
        </div>
      </div>
    );
  }
}

export default FlightMap;
