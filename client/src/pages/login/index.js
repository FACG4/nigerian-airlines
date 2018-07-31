import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Redirect, withRouter } from "react-router-dom";

import { Input, Button } from "../../components";
import "./login.css";

class Login extends Component {
  state = {
    isLogin: false,
    alert: null,
    loginInfo: {}
  };

  errorPassOrUsername() {
    const getAlert = () => (
      <SweetAlert
        warning
        title="Wrong!"
        confirmBtnBsStyle="danger"
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
    console.log("Hiding alert...");
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
        console.log("data", data);

        if (data.doneLogin) {
          this.setState({
            isLogin: true
          });
        } else {
          this.setState({
            isLogin: false
          });
          this.errorPassOrUsername();
        }
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  };

  handleTextInputChange = e => {
    const { loginInfo } = this.state;
    const updatedLoginInfo = loginInfo;
    updatedLoginInfo[e.target.name] = e.target.value;
    this.setState({ loginInfo });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header"> Admin Panel</h1>
        {this.state.alert}
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
        {this.state.isLogin && <Redirect to={"/admin/addflight"} />}
      </div>
    );
  }
}

export default withRouter(Login);
