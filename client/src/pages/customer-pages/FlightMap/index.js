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

    const positions = {
      Abuja: { lat: 9.072264, lng: 7.491302 },
      Enugu: { lat: 6.459964, lng: 7.548949 },
      Kaduna: { lat: 10.609319, lng: 7.429504 },
      Surulere: { lat: 6.5, lng: 3.35 },
      Sokoto: { lat: 13.005873, lng: 5.247552 },
      Bauchi: { lat: 10.314159, lng: 9.846282 }
    };

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
        <Map
          markers={[
            { position: positions[origin] },
            { position: positions[destination] }
          ]}
          zoom={5}
          center={{ lat: 9.072264, lng: 7.491302 }}
          containerElement={<div style={{ height: 100, width: 300 }} />}
          mapElement={<div style={{ height: 230, width: 300 }} />}
        />
      </div>
    );
  }
}

export default FlightMap;
