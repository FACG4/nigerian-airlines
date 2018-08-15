import React from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

import "./table.css";

class Table extends React.Component {
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
              flight_no: flightNo,
              origin,
              destination,
              gate,
              terminal_no: terminalNo,
              aircraft,
              departure_time: departureTime,
              flight_duration: flightDuration,
              status
            } = flight;
            return (
              <tr onClick={e => handleFlightNumber(e, flightNo)}>
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
