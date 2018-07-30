import React, { Component } from "react";

import "./select.css";

class Select extends Component {
  selectValue = e => {
    this.props.onSelectChange(e.target.value);
  };

  render() {
    const { labelText, firstItem, cities } = this.props;
    return (
      <div className="container-select">
        <label className="label-style">{labelText}</label>
        <select className="select-style" onChange={this.selectValue}>
          <option value="" disabled selected>
            {firstItem}
          </option>
          {cities.map(city => (
            <option>{city}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
