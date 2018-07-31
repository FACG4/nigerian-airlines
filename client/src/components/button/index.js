import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.css';

class Button extends Component {
  render() {
    const { textvalue } = this.props;
    return <button className='btn-style'>{textvalue}</button>;
  }
}

Button.propTypes = {
  textvalue: PropTypes.string
};

export default Button;
