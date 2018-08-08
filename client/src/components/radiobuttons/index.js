import React, { Component } from "react";
import PropTypes from "prop-types";

import "./radiobutton.css";

class RadioButton extends Component {
  radioValue = e => {
    this.props.onRadioChange(e.target.value);
  };

  render() {
    return (
      <div className="radiobuttons-style">
        <input
          className="radioclass"
          type="radio"
          name="status"
          value="Cancled"
          onChange={this.radioValue}
        />
        <label>Cancled</label>
        <input
          className="radioclass"
          type="radio"
          name="status"
          value="Delayed"
          onChange={this.radioValue}
        />
        <label>Delayed</label>
        <input
          className="radioclass"
          type="radio"
          name="status"
          value="On time"
          onChange={this.radioValue}
        />
        <label>On time</label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  onRadioChange: PropTypes.func
};

export default RadioButton;
