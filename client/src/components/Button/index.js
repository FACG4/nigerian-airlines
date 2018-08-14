import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ children, ...allAttributes }) => (
  <button {...allAttributes}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
