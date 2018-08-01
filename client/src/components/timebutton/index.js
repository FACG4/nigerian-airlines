import React, { Component } from "react";

import "./timebutton.css";

class Timebutton extends Component {
  render() {
    const { textvalue, onClick } = this.props;
    return (
      <button className="time-btn-style" onClick={this.props.onClick}>
        {textvalue}
      </button>
    );
  }
}

export default Timebutton;
