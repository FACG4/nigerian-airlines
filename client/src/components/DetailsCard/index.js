import React, { Component } from "react";
import PropTypes from "prop-types";

import "./detailscard.css";

class DetailsCard extends Component {
  getHowManyhourToDepart(mytime) {
    const dt1 = new Date();
    const dt2 = new Date(mytime);
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }

  render() {
    const {
      adminPanel,
      boarding_time,
      destination,
      origin,
      flight_no,
      detailsTitle,
      detailsInfoArray
    } = this.props;

    return (
      <div>
        {adminPanel ? (
          <div className="center-div">
            <div className="container-card-details">
              <div className="labels-container">
                <label className="details-label">Flight number</label>
                <label className="float-style">{flight_no}</label>
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
                <label className="float-style">{boarding_time}</label>
              </div>
            </div>
          </div>
        ) : (
          <div className="center-div">
            <div className="customer-container-card-details">
              <div className="labels-container">
                <label className="details-title-style">
                  Flight no : {detailsTitle}
                </label>
              </div>
              <div className="labels-container">
                <label className="details-label">
                  Expected to depart in over
                </label>
                <label className="float-style">
                  {this.getHowManyhourToDepart(detailsInfoArray.departure_time)}{" "}
                  hours
                </label>
              </div>
              <div className="labels-container">
                <label className="details-label">Total flight time </label>
                <label className="float-style">
                  {detailsInfoArray.flight_duration} hours
                </label>
              </div>
              <div className="labels-container">
                <label className="details-label">Aircraft type</label>
                <label className="float-style">
                  {detailsInfoArray.aircraft}
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

DetailsCard.propTypes = {
  adminPanel: PropTypes.bool,
  detailsTitle: PropTypes.string
};

export default DetailsCard;
