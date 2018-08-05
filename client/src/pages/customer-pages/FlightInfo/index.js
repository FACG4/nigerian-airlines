import React, { Component } from "react";

import { CustomerPageNavBar, Tabs, Card } from "../../../components";
import "./flightinfo.css";

class FlightRoute extends Component {
  render() {
    return (
      <div className="flightroute-container">
        <CustomerPageNavBar />
        <Tabs classNameMap="map-style" />
        <div className="card-container">
          <Card
            cardTitle="Origin"
            info={[
              {
                imgSrc: "/assets/imgs/delay.png",
                labelText: "FllightStatus",
                ImgClassName: "delay-card-img"
              },
              {
                imgSrc: "/assets/imgs/calender.svg",
                labelText: "Day   DD Month YEAR",
                ImgClassName: "calender-card-img"
              },
              {
                imgSrc: "/assets/imgs/time.png",
                labelText: "00:00 am",
                ImgClassName: "time-card-img"
              },
              {
                imgSrc: "/assets/imgs/gate.png",
                labelText: "Departing from gate no.",
                ImgClassName: "gate-card-img"
              },
              {
                imgSrc: "/assets/imgs/city.png",
                labelText: "City, Country",
                ImgClassName: "city-card-img"
              },
              {
                imgSrc: "/assets/imgs/airline.png",
                labelText: "Airline company name",
                ImgClassName: "airline-card-img"
              }
            ]}
          />
          <hr className="hr-style" />
          <Card
            cardTitle="Destination"
            info={[
              {
                imgSrc: "/assets/imgs/delay.png",
                labelText: "FllightStatus",
                ImgClassName: "delay-card-img"
              },
              {
                imgSrc: "/assets/imgs/calender.svg",
                labelText: "Day   DD Month YEAR",
                ImgClassName: "calender-card-img"
              },
              {
                imgSrc: "/assets/imgs/time.png",
                labelText: "00:00 am",
                ImgClassName: "time-card-img"
              },
              {
                imgSrc: "/assets/imgs/gate.png",
                labelText: "Departing from gate no.",
                ImgClassName: "gate-card-img"
              },
              {
                imgSrc: "/assets/imgs/city.png",
                labelText: "City, Country",
                ImgClassName: "city-card-img"
              },
              {
                imgSrc: "/assets/imgs/airline.png",
                labelText: "Airline company name",
                ImgClassName: "airline-card-img"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default FlightRoute;
