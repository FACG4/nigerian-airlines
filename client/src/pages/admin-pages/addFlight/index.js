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
    selectedCity: {},
    flightDuration: "",
    succesfullyAdded: false,
    alert: null
  };

  handleAddFlight = e => {
    e.preventDefault();
    const { dateValue, airCraftTypeValue } = this.state.form;
    const { originValue, destinationValue } = this.state.selectedCity;

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
    })
      .then(response => response.json(data))
      .then(data => {
        if (data.succesfullyAdded) {
          this.setState({
            succesfullyAdded: true
          });
          this.handleSuceessAddFlight();
        } else {
          this.setState({
            succesfullyAdded: false
          });
        }
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  };

  handleSuceessAddFlight() {
    const getAlert = () => (
      <SweetAlert
        success
        title="Done!"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="success"
        onConfirm={() => this.hideAlert()}
      >
        New Flight is Added
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

  handleSelectChange = e => {
    const { selectedCity } = this.state;
    const updatedSelectedCity = { ...selectedCity };
    updatedSelectedCity[e.target.name] = e.target.value;
    this.setState({ selectedCity: updatedSelectedCity });
  };

  calculateTime = e => {
    e.preventDefault();
    const randomNo = Math.floor(Math.random() * 11);
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
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav />
            <form
              className="sub-container-form"
              onSubmit={this.handleAddFlight}
            >
              {alert}
              <Select
                labelText="Origin"
                className="fromto-img"
                firstItem="Orgin"
                cities={["city1", "city2"]}
                name="originValue"
                onSelectChange={this.handleSelectChange}
              />
              <Select
                labelText="Destination"
                className="fromto-img"
                firstItem="Destination"
                cities={["city1", "city2"]}
                name="destinationValue"
                onSelectChange={this.handleSelectChange}
              />
              <Input
                labelText="Flight date"
                placeholder="flight date"
                className="calender-img"
                name="dateValue"
                type="date"
                onChange={this.handleInputChange}
              />
              <Input
                labelText="Aircraft type"
                placeholder="aircraft type"
                className="plane-img"
                name="airCraftTypeValue"
                onChange={this.handleInputChange}
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
