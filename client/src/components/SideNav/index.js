import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./sidenav.css";

class SideNav extends Component {
  render() {
    const { updateFlightTap } = this.props;
    return (
      <ul className="sidenav-container">
        <NavLink
          to="/admin/flights"
          className="inactive"
          activeClassName="active"
        >
          <li>
            <img src="/assets/imgs/tables.png" alt="tables" />
            Flights
          </li>
        </NavLink>
        <NavLink
          to="/admin/addflight"
          className="inactive"
          activeClassName="active"
        >
          <li>
            <img src="/assets/imgs/addtable.png" alt="atables" />
            Add Flight
          </li>
        </NavLink>
        {updateFlightTap && (
          <NavLink
            to="/admin/updateflight"
            className="inactive"
            activeClassName="active"
          >
            <li>
              <img src="/assets/imgs/edittable.png" alt="etables" />
              Update flight status
            </li>
          </NavLink>
        )}
      </ul>
    );
  }
}

SideNav.propTypes = {
  updateFlightTap: PropTypes.bool
};

export default SideNav;
