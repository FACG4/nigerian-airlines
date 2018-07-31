import React, { Component } from 'react';

import {  Table , Navbar } from '../../components'
class Flight extends Component {
  render() {
    return (
        <div className="sub-container2">
                 < Navbar />
          <div className="all-container">
                 <Table/>
             </div>
            </div>
    );
  }
}

export default Flight ;
