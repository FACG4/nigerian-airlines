import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidenav.css';

class SideNav extends Component {
  render() {
    const { thirdTap } = this.props;
    return (
      <ul className='sidenav-container'>
        <li>
          <img src='./assets/imgs/tables.png' alt='tables' />
          <Link to='/flights'>Flights</Link>
        </li>
        <li>
          <img src='./assets/imgs/addtable.png' alt='atables' />
          <Link to='/addflight'>Add Flights</Link>
        </li>
        { thirdTap &&
        (<li>
          <img src='./assets/imgs/edittable.png' alt='etables' />
          <Link to='/updateflight'>Update flight status</Link>
        </li>
        )
        }
      </ul>
    );
  }
}

SideNav.propTypes = {
  thirdTap: PropTypes.bool
};

export default SideNav;
