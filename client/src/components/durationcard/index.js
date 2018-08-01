import React, { Component } from "react";
import "./durationcard.css";

class Card extends Component {
  render() {
    const { flightduration } = this.props;
    return (
      <div className="inline-div">
        <div className="container-card">
          <img src={require("./time.png")} className="time-image" alt="time" />
          <label className="duration-label">
            Flight duration &nbsp; &nbsp;
          </label>
          <label className="duration-label">{flightduration}</label>
          <label className="duration-label">hours</label>
        </div>
      </div>
    );
  }
}

export default Card;
