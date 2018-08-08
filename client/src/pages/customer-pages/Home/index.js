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
  state = {
    textInputValueFlightNo: "",
    checkboxValue: true,
    isAvailable: false,
    alert: false
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

  hideAlert() {
    this.setState({
      alert: false
    });
  }

  handleCheck = e => {
    e.preventDefault();
    const { textInputValueFlightNo } = this.state;
    console.log(textInputValueFlightNo);
    // ... To be added on another pull request
  };

  render() {
    return (
      <React.Fragment>
        {this.state.alert && (
          <SweetAlert
            warning
            title="Wrong!"
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="danger"
            onConfirm={() => this.hideAlert()}
          >
            Invalied Flight no. !
          </SweetAlert>
        )}
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
            <Button className="cus-btn-style">Check</Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
