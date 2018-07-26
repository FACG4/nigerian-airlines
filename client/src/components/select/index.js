import React, { Component } from 'react';
import '../../App.css';
import './select.css';

class Select extends Component {
  render() {
    const { labelText, firstItem } = this.props;
    return (
      <div className='container-select'>
        <label className='label-style'>{labelText}</label>
        <select className='select-style'>
          <option>{firstItem}</option>
          <option>city1</option>
          <option>city2</option>
          <option>city3</option>
          <option>city4</option>
        </select>

      </div>
    );
  }
}

export default Select;
