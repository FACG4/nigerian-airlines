import React, { Component } from 'react';

import { DetailsCard, Input, Button, Header, SideNav, RadioButton} from '../../components'
import '../addFlight/addflight.css';

class UpdateFlight extends Component {
  render() {
    return (
        <div className="addflight-container">
          <Header />
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              <SideNav thirdTap={true}/>
              <div className="sub-container-form">
                <DetailsCard flightduration='00 hours' destination='destination' origin='origin' />
                <Input labelText='Departure time' iconclass='fa fa-user' placeholder='00:00:00 am' />
                <Input labelText='Boarding time' iconclass='fa fa-user' placeholder='00:00:00 am' />
                <Input labelText='Gate no.' iconclass='fa fa-user' placeholder='ex:1234' />
                <Input labelText='Terminal no.' iconclass='fa fa-user' placeholder='ex:1234' />
                <div className='width-div'>
                  <label className='label-style'>Status</label>
                  <RadioButton />
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
