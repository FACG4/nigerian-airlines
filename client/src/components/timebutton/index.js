import React, { Component } from 'react';
import './timebutton.css'

class Timebutton extends Component {
  render() {
    const { textvalue } = this.props;
    return (
      <button className='time-btn-style'>{textvalue}</button>
    );
  }
}
export default Timebutton;