import React, { Component } from 'react';

import { Header, SideNav, Table } from '../../components'

class Flight extends Component {
  render() {
    return (
        <div className="flight-container" >
          <Header />
          <div className="all-container">
            <div className="sub-containers">
              <SideNav />
              <div className="sub-container2">
                 <Table/>
             </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Flight ;
