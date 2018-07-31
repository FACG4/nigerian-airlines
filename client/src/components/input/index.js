import React from "react";

import "./input.css";

const Input = ({
  labelText,
  placeholder,
  onChange,
  className,
  name,
  value
}) => (
  <div className="container-input">
    <label className="label-style">{labelText}</label>
    <input
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Input;
