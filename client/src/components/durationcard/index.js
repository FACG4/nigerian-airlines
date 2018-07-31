import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './durationcard.css';

class Card extends Component {
  render() {
    const { flightduration } = this.props;
    return (
      <div className='inline-div'>
        <div className='container-card'>
          <img src='./assets/imgs/time.png' className='time-image' alt='time' />
          <label className='duration-label'>
            Flight duration &nbsp; &nbsp;
          </label>
          <label className='duration-label'>{flightduration}</label>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  flightduration: PropTypes.number
};

export default Card;
