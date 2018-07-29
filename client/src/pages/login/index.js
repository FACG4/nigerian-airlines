import React, { Component } from 'react';
import { Link ,Route, Redirect, withRouter } from 'react-router-dom';

import { Input, Button } from '../../components';
import './login.css';

class Login extends Component {
  state = {
    textInputValue: '',
    isLogin: false
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.loginStatus();
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.history.push('/addflight');
  }

  loginStatus = () => {
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
            <Input
              iconclass='fa fa-user'
              placeholder='username'
              onTextInputChange={this.handleTextInputChange}
            />
            <Input
              iconclass='fas fa-unlock'
              placeholder='password'
              onTextInputChange={this.handleTextInputChange}
            />
          </div>
          <Button onClick={this.handleLogin} className='btn-style'>Login</Button>
        </form>
        {/* {this.state.isLogin && <Redirect to={'/addflight'}/>} */}
      </div>
    );
  }
}

export default withRouter(Login);