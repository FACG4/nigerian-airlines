import React, { Component } from "react";
import { Header, SideNav, Table } from "../../../components";

class Flight extends Component {
  state = {
    flightsArray: [],
    flight_no: ""
  };
  componentDidMount() {
    fetch("/api/admin/flight_get", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ flightsArray: response.data });
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  }

  render() {
    const {
      props: { handleFlightNumber },
      state: { flightsArray }
    } = this;

    return (
      <div className="addflight-container">
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav />
            <div className="sub-container-form">
              <Table
                flightsArray={flightsArray}
                handleFlightNumber={handleFlightNumber}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flight;
