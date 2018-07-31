import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <img src='./assets/imgs/plane.png' className='plane-image' alt='plane'/>
        <p className='username'>username</p>
      </div>
    );
  }
}

export default Header;
