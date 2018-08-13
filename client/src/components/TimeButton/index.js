import React from "react";
import PropTypes from "prop-types";

import "./timebutton.css";

const TimeButton = ({ textvalue, ...allAttributes }) => (
  <button className="time-btn-style" {...allAttributes}>
    {textvalue}
  </button>
);

TimeButton.propTypes = {
  textvalue: PropTypes.string,
  onClick: PropTypes.func
};

export default TimeButton;
