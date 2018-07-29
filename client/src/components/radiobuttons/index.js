import React, { Component } from 'react';

import './radiobutton.css';

class Radiobutton extends Component {
  constructor(props) {
    super(props);
    this.radioValue = this.radioValue.bind(this);
  }

  radioValue(e) {
    this.props.onRadioChange(e.target.value);
  }

  render() {
    return (
      <form className='radiobuttons-style' onChange={this.radioValue} >
        <input className='radioclass' type='radio' name='status' value='Cancled' /><label className='label-style'>Cancled</label>
        <input className='radioclass' type='radio' name='status' value='Delayed' /><label className='label-style'>Delayed</label>
        <input className='radioclass' type='radio' name='status' value='On time' /><label className='label-style'>On time</label>
      </form>
    );
  }
}

export default Radiobutton;