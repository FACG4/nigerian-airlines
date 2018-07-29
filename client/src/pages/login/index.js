import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Input, Button } from '../../components';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      isLogin: false
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin(e) {
    e.preventDefault();
    this.loginStatus();
  }

  loginStatus() {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  handleTextInputChange(value) {
    console.log(value);
    this.setState({ textInputValue: value });
  }
  render() {
    return (
      <div className='container'>
        <h1 className='header'> Admin Panel</h1>
        <form onSubmit={this.handleLogin}>
          <div className='inputs-group'>
            <Input iconclass='fa fa-user' placeholder='username' onTextInputChange={this.handleTextInputChange}/>
            <Input iconclass='fas fa-unlock' placeholder='password' onTextInputChange={this.handleTextInputChange} />
          </div>
          <Button textvalue='Login' />
        </form>
        {this.state.isLogin && <Redirect to={'/addflight'}/>}
      </div>
    );
  }
}

export default Login;