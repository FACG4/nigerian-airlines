import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { withRouter } from "react-router-dom";

import { Input, Button } from "../../../components";
import "./login.css";

class Login extends Component {
  state = {
    isLoggedIn: false,
    alert: false,
    loginInfo: {},
    error: false
  };

  hideAlert = () => {
    this.setState({
      alert: null
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state.loginInfo;
    const data = JSON.stringify({
      username,
      password
    });
    fetch("/api/v1/login_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem("token", data.token);

        if (data.isLoggedIn) {
          this.setState({
            isLoggedIn: true
          });
          data.isLoggedIn && this.props.history.push("/admin/flights");
        } else {
          this.setState({
            isLoggedIn: false,
            alert: true
          });
        }
      })
      .catch(err => {
        this.setState({ alert: true });
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
        {alert && (
          <SweetAlert
            warning
            title="Wrong!"
            confirmBtnBsStyle="danger"
            s
            cancelBtnBsStyle="danger"
            onConfirm={this.hideAlert}
          >
            Invalied Password or Username !
          </SweetAlert>
        )}
        <h1 className="header">Admin Panel</h1>
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
      </div>
    );
  }
}

export default withRouter(Login);
