import React from "react";
import PropTypes from 'prop-types';

import "./detailscard.css";

const DetailsCard = ({ flightduration, destination, origin }) => (
  <div className="center-div">
    <div className="container-card-details">
      <label className="flightno-style">Flight no.</label>
      <div className="labels-container">
        <label className="details-label">From</label>
        <label className="float-style">{origin}</label>
      </div>
      <div className="labels-container">
        <label className="details-label">To</label>
        <label className="float-style">{destination}</label>
      </div>
      <div className="labels-container">
        <label className="details-label">Flight duration</label>
        <label className="float-style">{flightduration}</label>
      </div>
    </div>
  </div>
);

DetailsCard.propTypes = {
  flightduration: PropTypes.number,
  destination: PropTypes.string,
  origin: PropTypes.string
};

export default DetailsCard;
