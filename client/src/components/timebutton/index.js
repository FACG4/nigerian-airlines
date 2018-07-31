import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './timebutton.css';

class TimeButton extends Component {
  render() {
    const { textvalue } = this.props;
    return (
      <button className='time-btn-style'>{textvalue}</button>
    );
  }
}

TimeButton.propTypes = {
  textvalue: PropTypes.string
};

export default TimeButton;
