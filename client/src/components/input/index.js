import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  constructor (props){
    super(props)
    const state ={
      textValue : ''
    }
  }

  inputValue (value) {
    console.log(value);
    this.setState({ textValue :value })
  }

  render() {
    const { labelText,  placeholder } = this.props;
    return (
      <div className='container-input'>
        <label className='label-style'>{labelText}</label>
        <input className='input-style' placeholder={placeholder} onChange={(e)=>this.inputValue(e.target.value) }/>
      </div>
    );
  }
}

export default Input;