import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
