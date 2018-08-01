import React, { Component } from "react";

import "./select.css";

const Select = ({ labelText, firstItem, cities, name, onSelectChange }) => (
  <div className="container-select">
    <label className="label-style">{labelText}</label>
    <select className="select-style" onChange={onSelectChange} name={name}>
      <option value="" disabled selected>
        {firstItem}
      </option>
      {cities.map(city => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
