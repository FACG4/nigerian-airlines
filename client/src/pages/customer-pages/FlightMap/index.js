import React, { Component } from "react";

import { CustomerPageNavBar, Tabs, DetailsCard } from "../../../components";
import "./flightmap.css";

class FlightMap extends Component {
  render() {
    return (
      <div className="map-container">
        <CustomerPageNavBar />
        <Tabs classNameroute="flight-route-style" />
        <DetailsCard
          detailsTitle="Flight no."
          detailsInfoArray={[
            { subTitle: "Depart in over", titleValue: "20 hours" },
            { subTitle: "Total flight time", titleValue: "7 hours3" },
            { subTitle: "Aircraft Type", titleValue: "type1" }
          ]}
        />
        <hr className="style" />
        <div className="div-label-container">
          <label>Origin</label>
          &nbsp;-&nbsp;
          <label>Destination</label>
        </div>
      </div>
    );
  }
}

export default FlightMap;
