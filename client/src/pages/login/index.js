import React, { Component } from 'react';
import './login.css';
import '../../App.css';
import Input from '../../components/input';
import Button from '../../components/button';

class Login extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="header"> Admin Panel</h1>
          <div className="inputs-group">
            <Input iconclass='fa fa-user' placeholder='username' />
            <Input iconclass='fas fa-unlock' placeholder='password' />
          </div>
          <Button textvalue="Login"/>
        </div>
    );
  }
}

export default Login;
