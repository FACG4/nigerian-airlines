import React, { Component } from 'react';

import './select.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.selectValue = this.selectValue.bind(this);
  }

  selectValue(e) {
    this.props.onSelectChange(e.target.value);
  }

  render() {
    const { labelText, firstItem, cities } = this.props;
    return (
      <div className='container-select'>
        <label className='label-style'>{labelText}</label>
        <select className='select-style' onChange={this.selectValue} >
          <option>{firstItem}</option>
          {cities.map(city => <option>{city}</option>)}
        </select>
      </div>
    );
  }
}

export default Select;
