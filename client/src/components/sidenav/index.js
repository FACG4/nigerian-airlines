import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./sidenav.css";

class SideNav extends Component {
  render() {
    const { updateFlightTap } = this.props;
    return (
      <ul className="sidenav-container">
        <li>
          <img src="./assets/imgs/tables.png" alt="tables" />
          <Link to="/admin/flights">Flights</Link>
        </li>
        <li>
          <img src="./assets/imgs/addtable.png" alt="atables" />
          <Link to="/admin/addflight">Add Flights</Link>
        </li>
        {updateFlightTap && (
          <li>
            <img src="./assets/imgs/edittable.png" alt="etables" />
            <Link to="/admin/updateflight">Update flight status</Link>
          </li>
        )}
      </ul>
    );
  }
}

SideNav.propTypes = {
  updateFlightTap: PropTypes.bool
};

export default SideNav;
