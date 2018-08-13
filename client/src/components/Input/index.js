import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./input.css";

const Input = ({ labelText, className, labelClassName, ...allAttributes }) => (
  <div className="container-input">
    <label className={classnames("label-style", labelClassName)}>
      {labelText}
    </label>
    <input
      className={classnames("input-style", className)}
      {...allAttributes}
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
