import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

import {
  Input,
  Button,
  CustomerPageNavBar,
  CheckBox
} from "../../../components";
import "./home.css";

class Home extends Component {
  state = {
    textInputValueFlightNo: "",
    checkboxValue: true,
    isAvailable: false,
    alert: null
  };

  handleNoInputChange = e => {
    this.setState({
      textInputValueFlightNo: e.target.value
    });
  };

  handlecheckboxChange = () => {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  };

  invalidFlightNoAlert = () => {
    const getAlert = () => (
      <SweetAlert
        warning
        title="Wrong!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="danger"
        onConfirm={() => this.hideAlert()}
      >
        Invalied Flight no.!
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  };

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleCheck = e => {
    e.preventDefault();
    const { textInputValueFlightNo } = this.state;
    console.log(textInputValueFlightNo);
    const data = JSON.stringify({
      textInputValueFlightNo
    });
    fetch("/api/v1/check_flight", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json(data))
      .then(data => {
        sessionStorage.setItem("flight_no", data.flight_no);
        console.log(data.flight_no);

        if (data.isAvailable) {
          this.setState({
            isAvailable: true
          });
          data.isAvailable && (window.location = "/flightinfo");
        } else {
          this.setState({
            isAvailable: false
          });
          this.invalidFlightNoAlert();
        }
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  };

  render() {
    const { alert } = this.state;
    return (
      <div className="customer-container">
        <CustomerPageNavBar />
        <h1 className="customer-h1-style"> Track your flight </h1> {alert}{" "}
        <form onSubmit={this.handleCheck} className="customer-form-style">
          <div className="customer-inputs-group">
            <Input
              labelClassName="customer-label-style"
              className="customer-input-style calender-img"
              labelText="Your flight date"
              placeholder="Day DD/MM/Year"
              type="date"
              onChange={this.handledateInputChange}
            />{" "}
            <Input
              labelClassName="customer-label-style"
              className="customer-input-style flightno-img"
              labelText="Your flight Number"
              placeholder="ex: 1234"
              type="text"
              onChange={this.handleNoInputChange}
            />{" "}
          </div>{" "}
          <CheckBox
            className="checkbox-style"
            labelText="Keep me updated"
            type="checkbox"
            onTextInputChange={this.handlecheckboxChange}
          />{" "}
          <Button className="customer-btn-style" onClick={this.popup}>
            Check{" "}
          </Button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default Home;
