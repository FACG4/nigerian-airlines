import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Redirect, withRouter } from "react-router-dom";

import { Input, Button } from "../../components";
import "./login.css";

class Login extends Component {
  state = {
    isLoggedIn: false,
    alert: null,
    loginInfo: {}
  };

  invalidPasswordOrUsernameAlert() {
    const getAlert = () => (
      <SweetAlert
        warning
        title="Wrong!"
        confirmBtnBsStyle="danger"
        s
        cancelBtnBsStyle="danger"
        onConfirm={() => this.hideAlert()}
      >
        Invalied Password or Username !
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state.loginInfo;
    const data = JSON.stringify({
      username,
      password
    });
    fetch("/login_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json(data))
      .then(data => {
        if (data.isLoggedIn) {
          this.setState({
            isLoggedIn: true
          });
        } else {
          this.setState({
            isLoggedIn: false
          });
          this.invalidPasswordOrUsernameAlert();
        }
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  };

  handleTextInputChange = e => {
    const { loginInfo } = this.state;
    const updatedLoginInfo = { ...loginInfo };
    updatedLoginInfo[e.target.name] = e.target.value;
    this.setState({ loginInfo: updatedLoginInfo });
  };

  render() {
    const { alert } = this.state;
    return (
      <div className="container">
        <h1 className="header"> Admin Panel</h1>
        {alert}
        <form onSubmit={this.handleLogin}>
          <div className="inputs-group">
            <Input
              className="username-img"
              placeholder="username"
              name="username"
              type="text"
              onChange={this.handleTextInputChange}
            />
            <Input
              className="password-img"
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleTextInputChange}
            />
          </div>
          <Button className="btn-style">Login</Button>
        </form>
        {this.state.isLoggedIn && <Redirect to={"/addflight"} />}
      </div>
    );
  }
}

export default withRouter(Login);
