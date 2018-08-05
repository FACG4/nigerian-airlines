import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

import {
  Input,
  Button,
  CustomerPageNavBar,
  Checkbox
} from "../../../components";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValueFlightNo: "",
      checkboxValue: true,
      isAvailable: false,
      alert: null
    };

    this.handleNoInputChange = this.handleNoInputChange.bind(this);
    this.handlecheckboxChange = this.handlecheckboxChange.bind(this);
  }

  handleNoInputChange(e) {
    this.setState({
      textInputValueFlightNo: e.target.value
    });
  }

  handlecheckboxChange() {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  }

  invalidFlightNoAlert() {
    const getAlert = () => (
      <SweetAlert
        warning
        title="Wrong!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="danger"
        onConfirm={() => this.hideAlert()}
      >
        Invalied Flight no. !
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

  handleCheck = e => {
    e.preventDefault();
    const { textInputValueFlightNo } = this.state;
    console.log(textInputValueFlightNo);
  };

  render() {
    return (
      <div className="cus-container">
        <CustomerPageNavBar />
        <h1 className="cus-h1-style">Track your flight</h1>
        <form onSubmit={this.handleCheck} className="cus-form-style">
          <div className="cus-inputs-group">
            <Input
              labelClassName="cus-label-style"
              className="cus-input-style calender-img"
              labelText="Your flight date"
              placeholder="Day DD/MM/Year"
              type="date"
              onChange={this.handledateInputChange}
            />
            <Input
              labelClassName="cus-label-style"
              className="cus-input-style flightno-img"
              labelText="Your flight Number"
              placeholder="ex: 1234"
              type="text"
              onChange={this.handleNoInputChange}
            />
          </div>
          <Checkbox
            className="checkbox-style"
            labelText="Keep me updated"
            type="checkbox"
            onTextInputChange={this.handlecheckboxChange}
          />
          <Button className="cus-btn-style" onClick={this.popup}>
            Check
          </Button>
        </form>
      </div>
    );
  }
}

export default Home;
