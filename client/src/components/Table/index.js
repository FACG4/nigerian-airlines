import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import moment from "moment";

import "./table.css";

class Table extends React.Component {
  state = {
    flight_no: ""
  };
  flightDuration = (departure_time, arrival_time) => {
    const hours = moment
      .duration(
        moment(arrival_time, "YYYY/MM/DD HH:mm").diff(
          moment(departure_time, "YYYY/MM/DD HH:mm")
        )
      )
      .asHours();
    return hours;
  };

  handleFlight() {
    return <Redirect to={"/updateflight:flight_no"} />;
  }
  // handleFlightNumber(e, data) {
  //   console.log(data);
  //   this.setState({ flight_no: data });
  // }

  render() {
    const { flightsArray } = this.props;
    console.log(flightsArray, "d");
    return (
      <table className="table-style">
        <tbody>
          <tr>
            <th>Flight no.</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Gate</th>
            <th>Terminal no.</th>
            <th>Aircraft Type</th>
            <th>Flight date</th>
            <th>Flight duration</th>
            <th>Flight status</th>
          </tr>
          {flightsArray.map(flight => (
            <tr
              onClick={e => this.props.handleFlightNumber(e, flight.flight_no)}
            >
              <td>{flight.flight_no}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.gate}</td>
              <td>{flight.terminal_no}</td>
              <td>{flight.aircraft}</td>
              <td>{moment(flight.departure_time).format("MMMM Do YYYY")}</td>
              <td>{flight.flight_duration}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default withRouter(Table);
