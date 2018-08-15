import React from "react";
import PropTypes from "prop-types";

import "./input.css";

const Input = ({ labelText, className, labelClassName, ...allAttributes }) => (
  <div className="container-input">
    <label className={labelClassName}>{labelText}</label>
    <input className={className} {...allAttributes} />
  </div>
);

Input.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string
};

export default Input;
