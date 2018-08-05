import React, { Component } from "react";

import { NavBar, Tabs, DetailsCard } from "../../../components";
import "./map.css";

class MapTap extends Component {
  render() {
    return (
      <div className="map-container">
        <NavBar />
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

export default MapTap;
