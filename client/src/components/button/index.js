import React, { Component } from 'react';

import './button.css'

class Button extends Component {
  render() {
    const { onClick, className, children } = this.props;
    return (
      <button className='btn-style'>{ textvalue }</button>
    );
  }
}

export default Button;
