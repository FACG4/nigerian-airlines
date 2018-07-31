import React, { Component } from 'react';

import { DurationCard, Select, Input, TimeButton, Button, Header, SideNav} from '../../components'
import './addflight.css';

class UpdateFlight extends Component {
  render() {
    return (
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
                  <Button textvalue='Add'/>
                </div>
              </div>
    );
  }
}

export default UpdateFlight;
