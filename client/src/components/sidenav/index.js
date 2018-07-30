import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./sidenav.css";

class Sidenav extends Component {
  render() {
    const { updateFlightTap } = this.props;
    return (
      <ul className="sidenav-container">
        <li>
          <img src={require("./tables.png")} alt="tables" />
          <Link to="/admin/flights">Flights</Link>
        </li>
        <li>
          <img src={require("./addtable.png")} alt="atables" />
          <Link to="/admin/addflight">Add Flights</Link>
        </li>
        {updateFlightTap && (
          <li>
            <img src={require("./edittable.png")} alt="etables" />
            <Link to="/admin/updateflight">Update flight status</Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Sidenav;
