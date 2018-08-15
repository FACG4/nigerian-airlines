import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AddFlight, Login, UpdateFlight, Flights } from "./pages/admin-pages";
import { FlightInfo, Home, FlightMap } from "./pages/customer-pages";

class Router extends Component {
  state = {
    flightNo: ""
  };

  handleFlightNumber = (e, data) => {
    sessionStorage.setItem("flightNo", data);
    this.setState({ flightNo: data });
    window.location = "/admin/updateflight";
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/flightinfo" component={FlightInfo} />
          <Route path="/flightmap" component={FlightMap} />

          <Route exact path="/admin" render={() => <Login />} />
          <Route
            path="/admin/flights"
            render={() => (
              <Flights handleFlightNumber={this.handleFlightNumber} />
            )}
          />
          <Route path="/admin/addflight" component={AddFlight} />
          <Route path="/admin/updateflight" component={UpdateFlight} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
