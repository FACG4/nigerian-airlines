import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

import "./table.css";

class Table extends React.Component {
  flightDuration = (departureTime, arrivalTime) => {
    const hours = moment
      .duration(
        moment(arrivalTime, "YYYY/MM/DD HH:mm").diff(
          moment(departureTime, "YYYY/MM/DD HH:mm")
        )
      )
      .asHours();
    return hours;
  };

  render() {
    const { flightsArray, handleFlightNumber } = this.props;
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
          {flightsArray.map(flight => {
            const {
              flightNo,
              origin,
              destination,
              gate,
              terminalNo,
              aircraft,
              departureTime,
              flightDuration,
              status
            } = flight;
            return (
              <tr onClick={e => handleFlightNumber(e, flight.flightNo)}>
                <td>{flightNo}</td>
                <td>{origin}</td>
                <td>{destination}</td>
                <td>{gate}</td>
                <td>{terminalNo}</td>
                <td>{aircraft}</td>
                <td>{moment(departureTime).format("MMMM Do YYYY")}</td>
                <td>{flightDuration}</td>
                <td>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default withRouter(Table);
