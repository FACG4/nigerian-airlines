import React, { Component } from "react";

import {
  DetailsCard,
  Input,
  Button,
  Header,
  SideNav,
  RadioButton
} from "../../components";
import "../addFlight/addflight.css";

class UpdateFlight extends Component {
  state = {
    selectValue: "",
    form: {}
  };

  handleFlightUpdate = e => {
    e.preventDefault();
    console.log("form submit is going to be handledd here");
  };

  handleRadioChange = value => {
    this.setState({ selectValue: value });
  };

  handleInputChange = e => {
    const { form } = this.state;
    const updatedForm = form;
    updatedForm[e.target.name] = e.target.value;
    this.setState({ form: updatedForm });
  };

  render() {
    return (
      <div className="addflight-container">
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav thirdTap={true} />
            <form
              className="sub-container-form"
              onSubmit={this.handleFlightUpdate}
            >
              <DetailsCard
                flightduration="00 hours"
                destination="destination"
                origin="origin"
              />
              <Input
                className="input-style"
                name="departureTime"
                onChange={this.handleInputChange}
                labelText="Departure time"
                placeholder="00:00:00 am"
              />
              <Input
                className="input-style"
                name="boardingTime"
                onChange={this.handleInputChange}
                labelText="Boarding time"
                placeholder="00:00:00 am"
              />
              <Input
                className="input-style"
                name="gateNo"
                onChange={this.handleInputChange}
                labelText="Gate no."
                placeholder="ex:1234"
              />
              <Input
                className="input-style"
                name="terminalNo"
                onChange={this.handleInputChange}
                labelText="Terminal no."
                placeholder="ex:1234"
              />
              <div className="width-div">
                <label className="label-style">Status</label>
                <RadioButton onRadioChange={this.handleRadioChange} />
              </div>
              <div className="center-btn">
                <Button className="btn-style">Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateFlight;
