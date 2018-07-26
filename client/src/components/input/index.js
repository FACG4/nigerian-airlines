import React, { Component } from 'react';
import '../../App.css';
import './input.css';

class Input extends Component {
  render() {
    const { labelText,  placeholder } = this.props;
    return (
      <div className='container-input'>
        <label className='label-style'>{labelText}</label>
        <input className='input-style' placeholder={placeholder}/>
      </div>
    );
  }
}

export default Input;
