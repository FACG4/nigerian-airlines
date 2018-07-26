import React, { Component } from 'react';
import './select.css';

class Select extends Component {
  render() {
    const { labelText, firstItem, cities } = this.props;
    return (
      <div className='container-select'>
        <label className='label-style'>{labelText}</label>
        <select className='select-style'>
          <option>{firstItem}</option>
          {cities.map(city => <option>{city}</option>)}
        </select>
      </div>
    );
  }
}

export default Select;
