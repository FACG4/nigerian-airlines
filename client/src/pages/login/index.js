import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

// import { Input, Button } from "../../components";
import Input from "../../components/input";
import Button from "../../components/button";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValueUsername: "",
      textInputValuePassword: "",
      isLogin: false,
      alert: null
    };

    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

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

  handleLogin(e) {
    e.preventDefault();
    const { textInputValueUsername, textInputValuePassword } = this.state;
    const data = JSON.stringify({
      textInputValueUsername,
      textInputValuePassword
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
    console.log(this.state.isLogin);

    return (
      <div className="container">
        {this.state.alert}
        <h1 className="header"> Admin Panel</h1>
        <form onSubmit={this.handleLogin}>
          <div className="inputs-group">
            <Input
              iconclass="fa fa-user"
              placeholder="username"
              onTextInputChange={this.handleUsernameInputChange}
            />
            <Input
              iconclass="fas fa-unlock"
              placeholder="password"
              onTextInputChange={this.handlePasswordInputChange}
            />
          </div>
          <Button textvalue="Login" />
        </form>
        {this.state.isLogin && <Redirect to={"/addflight"} />}
      </div>
    );
  }
}

export default Login;
