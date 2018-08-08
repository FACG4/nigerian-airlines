import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./input.css";

const Input = ({
  labelText,
  placeholder,
  onChange,
  className,
  name,
  type,
  value,
  labelClassName
}) => (
  <div className="container-input">
    <label className={classnames("label-style", labelClassName)}>
      {labelText}
    </label>
    <input
      name={name}
      className={classnames("input-style", className)}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
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
