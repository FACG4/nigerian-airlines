import React from "react";
import PropTypes from "prop-types";

import "./detailscard.css";

const DetailsCard = ({ boardingTime, destination, origin, flightNo }) => (
  <div className="center-div">
    <div className="container-card-details">
      <div className="labels-container">
        <label className="details-label">Flight number</label>
        <label className="float-style">{flightNo}</label>
      </div>
      <div className="labels-container">
        <label className="details-label">From</label>
        <label className="float-style">{origin}</label>
      </div>
      <div className="labels-container">
        <label className="details-label">To</label>
        <label className="float-style">{destination}</label>
      </div>
      <div className="labels-container">
        <label className="details-label">Arrival Time</label>
        <label className="float-style">{boardingTime}</label>
      </div>
    </div>
  </div>
);

DetailsCard.propTypes = {
  detailsTitle: PropTypes.string,
  detailsInfoArray: PropTypes.array
};

export default DetailsCard;
