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
          value="Cancelled"
          onChange={this.radioValue}
          id="cancel"
        />
        <label className="label-style" htmlFor="cancel">
          Cancelled
        </label>
        <input
          className="radioclass"
          type="radio"
          name="status"
          value="Delayed"
          onChange={this.radioValue}
          id="delayed"
        />
        <label className="label-style" htmlFor="delayed">
          Delayed
        </label>
        <input
          className="radioclass"
          type="radio"
          name="status"
          value="On time"
          onChange={this.radioValue}
          id="ontime"
        />
        <label className="label-style" htmlFor="ontime">
          On time
        </label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  onRadioChange: PropTypes.func
};

export default RadioButton;
