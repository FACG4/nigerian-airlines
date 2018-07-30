import React, { Component } from "react";

import {
  DurationCard,
  Select,
  Input,
  TimeButton,
  Button,
  Header,
  SideNav
} from "../../components";

import "./addflight.css";

class AddFlight extends Component {
  state = {
    originValue: "",
    destinationValue: "",
    dateValue: "",
    airCraftTypeValue: ""
  };

  handleAddFlight = e => {
    e.preventDefault();
    const {
      originValue,
      destinationValue,
      dateValue,
      airCraftTypeValue
    } = this.state;
    const data = JSON.stringify({
      originValue,
      destinationValue,
      dateValue,
      airCraftTypeValue
    });
    fetch("/addFlight_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    });
  };

  handleSelectOriginChange = value => {
    console.log(value);
    this.setState({ originValue: value });
  };

  handleSelectDestinationChange = value => {
    console.log(value);
    this.setState({ destinationValue: value });
  };

  handleFlightDateChange = value => {
    console.log(value);
    this.setState({ dateValue: value });
  };

  handleAircraftTypeChange = value => {
    console.log(value);
    this.setState({ airCraftTypeValue: value });
  };
  calculateTime = e => {
    // e.preventDefault();
    console.log("Flight time calcuated");
  };

  render() {
    return (
      <div className="addflight-container">
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav />
            <form
              className="sub-container-form"
              onSubmit={this.handleAddFlight}
            >
              <Select
                labelText="Origin"
                firstItem="Select your orgin"
                cities={["city1", "city2"]}
                onSelectChange={this.handleSelectOriginChange}
              />
              <Select
                labelText="Destination"
                firstItem="Select your destination"
                cities={["city1", "city2"]}
                onSelectChange={this.handleSelectDestinationChange}
              />
              <Input
                labelText="Flight date"
                placeholder="flight date"
                className="input-style"
                onTextInputChange={this.handleFlightDateChange}
              />
              <Input
                labelText="Aircraft type"
                placeholder="aircraft type"
                className="input-style"
                onTextInputChange={this.handleAircraftTypeChange}
              />
              <div className="width-div">
                <TimeButton
                  onClick={this.calculateTime}
                  textvalue="Calculate time"
                />
                <DurationCard flightduration="00 hours" />
              </div>
              <div className="center-btn">
                <Button className="btn-style">Add</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFlight;
