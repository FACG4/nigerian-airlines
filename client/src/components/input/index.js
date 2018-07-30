import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputValue = this.inputValue.bind(this);
  }

  inputValue(e) {
    this.props.onTextInputChange(e.target.value);
  }

  render() {
    const { labelText, placeholder } = this.props;
    return (
      <div className="container-input">
        <label className="label-style">{labelText}</label>
        <input
          className="input-style"
          placeholder={placeholder}
          onChange={this.inputValue}
        />
      </div>
    );
  }
}

export default Input;
