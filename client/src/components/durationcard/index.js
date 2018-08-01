import React from "react";

import "./durationcard.css";

const DurationCard = ({ flightduration }) => (
  <div className="inline-div">
    <div className="container-card">
      <img src={require("./time.png")} className="time-image" alt="time" />
      <label className="duration-label">Flight duration &nbsp; &nbsp;</label>
      <label className="duration-label">
        {flightduration}
        &nbsp; hours
      </label>
    </div>
  </div>
);

export default DurationCard;
