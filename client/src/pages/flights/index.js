import React, { Component } from 'react';

import {  Table , Navbar } from '../../components'
class Flight extends Component {
  render() {
    return (
            
    <div className="addflight-container">
          {/* <Header /> */}
          <div className="container-content">
            <div className="sub-container-sidenav-form">
              {/* <SideNav /> */}
              <div className='sub-container-form'>
              <Table flightsArray = {[{flight_no:123, flight_date: '7/7/2018', depature_time:'07:00:00',arrival_time:'05:00:00'}]}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Flight ;
