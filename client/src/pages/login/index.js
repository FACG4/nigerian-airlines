import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Input, Button } from '../../components';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValueUsername: '',
      textInputValuePassword: '',
      isLogin: false
    };

    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin(e) {
    e.preventDefault();
    // this.loginStatus();
    const { textInputValueUsername, textInputValuePassword } = this.state;
    console.log('bb',textInputValueUsername);
    const data = JSON.stringify({
      textInputValueUsername,
      textInputValuePassword
    });
    fetch('/login_post', {
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .catch(err => {
        console.log('There has been an error in delete student', err);
      });
  }

  loginStatus() {
    // this.setState({
    //   isLogin: !this.state.isLogin
    // });
  }

  handleUsernameInputChange(value) {
    console.log(value);
    this.setState({ textInputValueUsername: value });
  }

  handlePasswordInputChange(value) {
    console.log(value);
    this.setState({ textInputValuePassword: value });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='header'> Admin Panel</h1>
        <form onSubmit={this.handleLogin}>
          <div className='inputs-group'>
            <Input iconclass='fa fa-user' placeholder='username' onTextInputChange={this.handleUsernameInputChange}/>
            <Input iconclass='fas fa-unlock' placeholder='password' onTextInputChange={this.handlePasswordInputChange} />
          </div>
          <Button textvalue='Login' />
        </form>
        {/* {this.state.isLogin && <Redirect to={'/addflight'}/>} */}
      </div>
    );
  }
}

export default Login;
