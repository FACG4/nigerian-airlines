import React, { Component } from 'react';
import './radiobutton.css'

class Radiobutton extends Component {
  render() {
    return (
      <form className='radiobuttons-style'>
        <input className='radioclass' type="radio" name="status" value='Cancled' /><label className='label-style'>Cancled</label>
        <input className='radioclass' type="radio" name="status" value='Delayed' /><label className='label-style'>Delayed</label>
        <input className='radioclass' type="radio" name="status" value='On time' /><label className='label-style'>On time</label>
      </form>
    );
  }
}

export default Radiobutton;
