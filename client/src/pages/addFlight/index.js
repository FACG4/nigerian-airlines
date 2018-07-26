import React, { Component } from 'react';
import './addflight.css';
import '../../App.css';
import Durationcard from '../../components/durationcard';
import Select from '../../components/select';
import Input from '../../components/input';
import Timebutton from '../../components/timebutton';
import Button from '../../components/button';
import Header from '../../components/header';
import Sidenav from '../../components/sidenav';

class UpdateFlight extends Component {
  render() {
    return (
        <div className="addflight-container">
          <Header />
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              <Sidenav />
              <div className="sub-container-form">
                <Select labelText='Origin' firstItem='from' />
                <Select labelText='Destination' firstItem='to' />
                <Input labelText='Flight date' placeholder='flight date' />
                <Input labelText='Aircraft type' placeholder='aircraft type' />
                <div className='width-div'>
                  <Timebutton textvalue='Calculate time' />
                  <Durationcard flightduration='00 hours'/>
                </div>
                <div className='center-btn'>
                  <Button textvalue='Add'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateFlight;
