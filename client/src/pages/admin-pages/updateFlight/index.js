import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import moment from "moment";

import { getTimeFromTimeStamp } from "../../../helpers/formatTimeAndDate";
import {
  DetailsCard,
  Input,
  Button,
  Header,
  SideNav,
  RadioButton
} from "../../../components";

import "../addFlight/addflight.css";

const flightNo = sessionStorage.getItem("flightNo");

class UpdateFlight extends Component {
  state = {
    selectValue: "",
    form: {},
    flightInformation: {},
    alert: false,
    error: true
  };
  componentDidMount() {
    fetch(`/api/v1/flight/${flightNo}`, {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ flightInformation: response.data });
      })
      .catch(err => {
        console.log("There has been an error ", err);
        this.setState({ error: true });
      });
  }

  handleFlightUpdate = e => {
    e.preventDefault();
    const status = this.state.selectValue;
    const { departureTime, gateNo, terminalNo } = this.state.form;
    const data = JSON.stringify({
      departureTime,
      gateNo,
      terminalNo,
      flightNo,
      status
    });
    fetch(`/api/v1/flight/${flightNo}`, {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    });
    this.setState({
      alert: true
    });
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
    const {
      alert,
      flightInformation: {
        flight_duration: flightDuration,
        flight_no: flightNo,
        departure_time: departureTime,
        destination,
        origin,
        gate
      }
    } = this.state;
    return (
      <div className="addflight-container">
        {alert && (
          <SweetAlert
            success
            title="Done!"
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="success"
            onConfirm={() => (window.location = "/admin/flights")}
          >
            New Flight is Added
          </SweetAlert>
        )}
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav updateFlightTap={true} />
            <form
              className="sub-container-form"
              onSubmit={this.handleFlightUpdate}
            >
              <DetailsCard
                adminPanel={true}
                flightNo={flightNo}
                boardingTime={`${moment(departureTime)
                  .add(flightDuration, "hour")
                  .format("YYYY/MM/DD HH:mm")}`}
                destination={destination}
                origin={origin}
              />
              <Input
                labelClassName="label-style"
                className="input-style departuretime-img"
                name="departureTime"
                labelText="Departure time"
                onChange={this.handleInputChange}
                placeholder={getTimeFromTimeStamp(departureTime)}
              />
              <Input
                labelClassName="label-style"
                className="input-style gate-img"
                name="gateNo"
                onChange={this.handleInputChange}
                labelText="Gate no."
                placeholder={gate}
              />
              <Input
                labelClassName="label-style"
                className="input-style terminalno-img"
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
