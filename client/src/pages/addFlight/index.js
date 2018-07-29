import React, { Component } from 'react';

import { DurationCard, Select, Input, TimeButton, Button, Header, SideNav} from '../../components'
import './addflight.css';

class UpdateFlight extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectValue: '',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);

  }

  handleSelectChange(value) {
    console.log(value);
    this.setState({  selectValue: value });
  }
  render() {
    return (
        <div className="addflight-container">
          <Header />
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              <SideNav />
              <div className="sub-container-form">
                <Select labelText='Origin' firstItem='from' cities={['city1','city2']} onSelectChange={this.handleSelectChange} />
                <Select labelText='Destination' firstItem='to' cities={['city1','city2']} onSelectChange={this.handleSelectChange} />
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
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateFlight;
