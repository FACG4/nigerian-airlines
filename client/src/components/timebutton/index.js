import React, { Component } from "react";
import PropTypes from "prop-types";

import "./timebutton.css";

class TimeButton extends Component {
  render() {
    const { textvalue, onClick } = this.props;
    return (
      <button className="time-btn-style" onClick={onClick}>
        {textvalue}
      </button>
    );
  }
}

TimeButton.propTypes = {
  textvalue: PropTypes.string,
  onClick: PropTypes.func
};

export default TimeButton;
