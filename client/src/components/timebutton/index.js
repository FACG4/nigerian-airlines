import React from "react";
import PropTypes from "prop-types";

import "./timebutton.css";

const TimeButton = ({ textvalue, onClick }) => (
  <button className="time-btn-style" onClick={onClick}>
    {textvalue}
  </button>
);

TimeButton.propTypes = {
  textvalue: PropTypes.string,
  onClick: PropTypes.func
};

export default TimeButton;
