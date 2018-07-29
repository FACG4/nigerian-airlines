import React, { Component } from 'react';

import './sidenav.css'

class Sidenav extends Component {
  render() {
    const { thirdTap } = this.props;
    return (
      <ul className="sidenav-container">

        <li>
          <img src={require('./tables.png')} alt='tables' />
          <a href="#">Flights</a>
        </li>

        <li>
          <img src={require('./addtable.png')} alt='atables' />
          <a href="#">Add Flights</a>
        </li>

      { thirdTap &&
        (<li>
          <img src={require('./edittable.png')} alt='etables' />
          <a href="#">Update flight status</a>
        </li>)
      }
      </ul>
    );
  }
}

export default Sidenav;
