import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <select className='select-style' onChange={this.selectValue}>
          <option value='' disabled selected>
            {firstItem}
          </option>
          {cities.map(city => (
            <option>{city}</option>
          ))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  onSelectChange: PropTypes.func,
  labelText: PropTypes.string,
  firstItem: PropTypes.string,
  cities: PropTypes.array
};

export default Select;
