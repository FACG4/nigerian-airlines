import React, { Component } from 'react';
import '../../App.css';
import './detailscard.css'

class Card extends Component {
  render() {
    const { flightduration, destination , origin} = this.props;
    return (
      <div className='center-div'>
        <div className='container-card-details'>
          <label className='flightno-style'>Flight no.</label>
          <div className='labels-container'>
            <label className='duration-label'>From</label>
            <label className='float-style'>{origin}</label>
          </div>
          <div className='labels-container'>
            <label className='duration-label'>To</label>
            <label className='float-style'>{destination}</label>
          </div>
          <div className='labels-container'>
            <label className='duration-label'>Flight duration</label>
            <label className='float-style'>{flightduration}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
