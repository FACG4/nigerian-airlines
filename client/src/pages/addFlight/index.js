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

class UpdateFlight extends Component {
  state = {
    selectValue: ""
  };

  handleAddFlight = e => {
    e.preventDefault();
    console.log("on added flights will be handled here");
  };

  handleSelectChange = value => {
    console.log(value);
    this.setState({ selectValue: value });
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
                onSelectChange={this.handleSelectChange}
              />
              <Select
                labelText="Destination"
                firstItem="Select your destination"
                cities={["city1", "city2"]}
                onSelectChange={this.handleSelectChange}
              />
              <Input
                labelText="Flight date"
                placeholder="flight date"
                className="input-style"
              />
              <Input
                labelText="Aircraft type"
                placeholder="aircraft type"
                className="input-style"
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

export default UpdateFlight;
