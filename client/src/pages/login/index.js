import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { Input, Button } from "../../components";
import "./login.css";

class Login extends Component {
  state = {
    isLogin: false,
    loginInfo: {}
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      isLogin: !this.state.isLogin
    });
  };

  handleTextInputChange = e => {
    const { loginInfo } = this.state;
    const updatedLoginInfo = loginInfo;
    updatedLoginInfo[e.target.name] = e.target.value;
    this.setState({ loginInfo: updatedLoginInfo });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header"> Admin Panel</h1>
        <form onSubmit={this.handleLogin}>
          <div className="inputs-group">
            <Input
              className="input-style"
              placeholder="username"
              name="username"
              onChange={this.handleTextInputChange}
            />
            <Input
              className="input-style"
              placeholder="password"
              name="password"
              onChange={this.handleTextInputChange}
            />
          </div>
          <Button className="btn-style">Login</Button>
        </form>
        {this.state.isLogin && <Redirect to={"/addflight"} />}
      </div>
    );
  }
}

export default withRouter(Login);
