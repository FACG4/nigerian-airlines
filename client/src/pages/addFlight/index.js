import React, { Component } from 'react';

import { DurationCard, Select, Input, TimeButton, Button, Header, SideNav} from '../../components'
import './addflight.css';

class UpdateFlight extends Component {
  addFlight = (e) => {
    e.preventDefault();
    console.log("hi")
  }
  render() {
    return (
        <div className="addflight-container">
          <Header />
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              <SideNav />
              <div className="sub-container-form">
                <Select labelText='Origin' firstItem='from' cities={['city1','city2']}/>
                <Select labelText='Destination' firstItem='to' cities={['city1','city2']} />
                <Input labelText='Flight date' placeholder='flight date' />
                <Input labelText='Aircraft type' placeholder='aircraft type' />
                <div className='width-div'>
                  <TimeButton textvalue='Calculate time' />
                  <DurationCard flightduration='00 hours'/>
                </div>
                <div className='center-btn'>
                  <Button
                    className="btn-style"
                    onClick={this.addFlight}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateFlight;
