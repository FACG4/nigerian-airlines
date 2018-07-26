import React, { Component } from 'react';
import '../../App.css';
import './flight.css';
import Header from '../../components/header';
import Sidenav from '../../components/sidenav';
import Table from '../../components/table';

class Flight extends Component {
  render() {
    return (
        <div className="flight-container" >
          <Header />
          <div className="all-container">
            <div className="sub-containers">
              <Sidenav />
              <div className="sub-container2">
                <Table />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Flight ;
