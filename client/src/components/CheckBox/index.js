import React from "react";
import PropTypes from "prop-types";

import "./checkbox.css";

const Checkbox = ({ labelText, type, className, onTextInputChange }) => (
  <div className="container-checkbox">
    <input className={className} type={type} onChange={onTextInputChange} />
    <label className="label-checkbox-style">{labelText}</label>
  </div>
);

Checkbox.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onTextInputChange: PropTypes.func
};

export default Checkbox;
