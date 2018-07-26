import React, { Component } from 'react';
import '../addFlight/addflight.css';
import Input from '../../components/input';
import Button from '../../components/button';
import Header from '../../components/header';
import Sidenav from '../../components/sidenav';
import Radiobutton from '../../components/radiobuttons';
import DetailsCard from '../../components/detailscard';

class UpdateFlight extends Component {
  render() {
    return (
        <div className="addflight-container">
          <Header />
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              <Sidenav thirdTap={true}/>
              <div className="sub-container-form">
                <DetailsCard flightduration='00 hours' destination='destination' origin='origin' />
                <Input labelText='Departure time' iconclass='fa fa-user' placeholder='00:00:00 am' />
                <Input labelText='Boarding time' iconclass='fa fa-user' placeholder='00:00:00 am' />
                <Input labelText='Gate no.' iconclass='fa fa-user' placeholder='ex:1234' />
                <Input labelText='Terminal no.' iconclass='fa fa-user' placeholder='ex:1234' />
                <div className='width-div'>
                  <label className='label-style'>Status</label>
                  <Radiobutton />
                </div>
                <div className='center-btn'>
                  <Button textvalue='Update'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateFlight;
