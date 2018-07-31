import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputValue = this.inputValue.bind(this);
  }

  inputValue(e) {
    this.props.onTextInputChange(e.target.value);
  }

  render() {
    const { labelText, placeholder, type } = this.props;
    return (
      <div className='container-input'>
        <label className='label-style'>{labelText}</label>
        <input
          className='input-style'
          placeholder={placeholder}
          type={type}
          onChange={this.inputValue}
        />
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onTextInputChange: PropTypes.func
};

export default Input;
