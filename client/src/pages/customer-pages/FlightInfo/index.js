import React, { Component } from "react";
import {
  getTimeFromTimeStamp,
  getDateFromTimeStamp
} from "../../../helpers/formatTimeAndDate";

import { CustomerPageNavBar, Tabs, Card } from "../../../components";
import "./flightinfo.css";

class FlightRoute extends Component {
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
      airline,
      origin,
      destination,
      flight_date,
      departure_time,
      arrival_time,
      gate,
      terminal_no,
      status
    } = this.state.flightInformation;

    return (
      <div className="flightroute-container">
        <CustomerPageNavBar />
        <Tabs classNameMap="map-style" />
        <div className="card-container">
          <Card
            cardTitle={origin}
            info={[
              {
                imgSrc: "/assets/imgs/delay.png",
                labelText: status,
                ImgClassName: "delay-card-img"
              },
              {
                imgSrc: "/assets/imgs/calender.svg",
                labelText: getDateFromTimeStamp(flight_date),
                ImgClassName: "calender-card-img"
              },
              {
                imgSrc: "/assets/imgs/time.png",
                labelText: getTimeFromTimeStamp(departure_time),
                ImgClassName: "time-card-img"
              },
              {
                imgSrc: "/assets/imgs/gate.png",
                labelText: "Departing from " + gate,
                ImgClassName: "gate-card-img"
              },
              {
                imgSrc: "/assets/imgs/city.png",
                labelText: origin,
                ImgClassName: "city-card-img"
              },
              {
                imgSrc: "/assets/imgs/airline.png",
                labelText: airline,
                ImgClassName: "airline-card-img"
              }
            ]}
          />
          <hr className="hr-style" />
          <Card
            cardTitle={destination}
            info={[
              {
                imgSrc: "/assets/imgs/delay.png",
                labelText: status,
                ImgClassName: "delay-card-img"
              },
              {
                imgSrc: "/assets/imgs/calender.svg",
                labelText: getDateFromTimeStamp(flight_date),
                ImgClassName: "calender-card-img"
              },
              {
                imgSrc: "/assets/imgs/time.png",
                labelText: getTimeFromTimeStamp(arrival_time),
                ImgClassName: "time-card-img"
              },
              {
                imgSrc: "/assets/imgs/gate.png",
                labelText: "Arrive at " + terminal_no,
                ImgClassName: "gate-card-img"
              },
              {
                imgSrc: "/assets/imgs/city.png",
                labelText: destination,
                ImgClassName: "city-card-img"
              },
              {
                imgSrc: "/assets/imgs/airline.png",
                labelText: airline,
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
