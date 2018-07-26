import React, { Component } from 'react';
import '../../App.css';
import './select.css';

class Select extends Component {
  render() {
    const { labelText, firstItem } = this.props;
    return (
      <div className='container-select'>
        <label className='label-style'>{labelText}</label>
        {/* <i class={iconclass}></i> */}
        <select className='select-style'>
          <option>{firstItem}</option>
          <option>balsam</option>
          <option>balsam</option>
          <option>balsam</option>
          <option>balsam</option>
        </select>

      </div>
    );
  }
}

export default Select;
