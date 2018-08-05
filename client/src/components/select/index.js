import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./select.css";

const Select = ({
  labelText,
  className,
  firstItem,
  cities,
  name,
  onSelectChange
}) => (
  <div className="container-select">
    <label className="label-style">{labelText}</label>
    <select
      className={classnames("select-style", className)}
      onChange={onSelectChange}
      name={name}
    >
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

Select.propTypes = {
  labelText: PropTypes.string,
  firstItem: PropTypes.string,
  cities: PropTypes.array,
  name: PropTypes.string,
  onSelectChange: PropTypes.func
};

export default Select;
