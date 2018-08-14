import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

import {
  DurationCard,
  Select,
  Input,
  TimeButton,
  Button,
  Header,
  SideNav
} from "../../../components";

import "./addflight.css";

class AddFlight extends Component {
  state = {
    form: {},
    selectedValue: {},
    flightDuration: "",
    succesfullyAdded: false,
    alert: false,
    error: false
  };

  handleAddFlight = e => {
    e.preventDefault();

    const {
      flightDuration,
      selectedValue: { originValue, destinationValue, airCraftTypeValue },
      form: { dateValue, flightNumberValue }
    } = this.state;

    const data = JSON.stringify({
      flightDuration,
      originValue,
      destinationValue,
      dateValue,
      airCraftTypeValue,
      flightNumberValue
    });
    fetch("/api/v1/addFlight_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        if (data.succesfullyAdded) {
          this.setState({
            succesfullyAdded: true,
            alert: true
          });
        } else {
          this.setState({
            succesfullyAdded: false
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  hideAlert = () => {
    this.setState({
      alert: false
    });
  };

  handleSelectChange = e => {
    const { selectedValue } = this.state;
    const { name, value } = e.target;
    const updatedSelectedCity = { ...selectedValue };
    updatedSelectedCity[name] = value;
    this.setState({ selectedValue: updatedSelectedCity });
  };

  calculateTime = e => {
    e.preventDefault();
    const randomNo = Math.floor(Math.random() * (10 - 5) + 5);
    this.setState({ flightDuration: randomNo });
  };

  handleInputChange = e => {
    const { form } = this.state;
    const updatedForm = JSON.parse(JSON.stringify(form));
    updatedForm[e.target.name] = e.target.value;
    this.setState({ form: updatedForm });
  };

  render() {
    const { alert } = this.state;
    return (
      <div className="addflight-container">
        {alert && (
          <SweetAlert
            success
            title="Done!"
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="success"
            onConfirm={this.hideAlert}
          >
            New Flight is Added
          </SweetAlert>
        )}
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
                name="originValue"
                className="fromto-img"
                firstItem="Orgin"
                cities={[
                  "Abuja",
                  "Enugu",
                  "Kaduna",
                  "Kano",
                  "Lagos",
                  "Port Harcourt",
                  "Sokoto",
                  "Asaba",
                  "Bauchi"
                ]}
                onSelectChange={this.handleSelectChange}
              />
              <Select
                name="destinationValue"
                labelText="Destination"
                className="fromto-img"
                firstItem="Destination"
                cities={[
                  "Abuja",
                  "Enugu",
                  "Kaduna",
                  "Kano",
                  "Lagos",
                  "Port Harcourt",
                  "Sokoto",
                  "Asaba",
                  "Bauchi"
                ]}
                onSelectChange={this.handleSelectChange}
              />
              <Input
                labelClassName="label-style"
                labelText="FlightNumber"
                placeholder="flight number"
                className="terminalno-img"
                name="flightNumberValue"
                type="text"
                onChange={this.handleInputChange}
              />
              <Input
                labelClassName="label-style"
                labelText="Flight date"
                placeholder="flight date"
                className="calender-img"
                name="dateValue"
                type="date"
                onChange={this.handleInputChange}
              />
              <Select
                labelText="Aircraft type"
                className="plane-img"
                name="airCraftTypeValue"
                firstItem="AirCraft Type"
                cities={[
                  "Boeing 737-300",
                  "Boeing 737-500",
                  "Dornier 328-300",
                  "Boeing 777-200LR",
                  "Embraer ERJ 145",
                  "Bombardier Q400",
                  "Airbus A321"
                ]}
                onSelectChange={this.handleSelectChange}
              />
              <div className="width-div">
                <TimeButton
                  onClick={this.calculateTime}
                  textvalue="Calculate time"
                />
                <DurationCard flightduration={this.state.flightDuration} />
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
