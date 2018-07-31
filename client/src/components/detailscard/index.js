import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './detailscard.css';

class Card extends Component {
  render() {
    const { flightduration, destination , origin } = this.props;
    return (
      <div className='center-div'>
        <div className='container-card-details'>
          <label className='flightno-style'>Flight no.</label>
          <div className='labels-container'>
            <label className='details-label'>From</label>
            <label className='float-style'>{origin}</label>
          </div>
          <div className='labels-container'>
            <label className='details-label'>To</label>
            <label className='float-style'>{destination}</label>
          </div>
          <div className='labels-container'>
            <label className='details-label'>Flight duration</label>
            <label className='float-style'>{flightduration}</label>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  flightduration: PropTypes.number,
  destination: PropTypes.string,
  origin: PropTypes.string
};

export default Card;
