import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { AddFlight, Login, UpdateFlight } from "./pages/admin-pages";
import { FlightInfo, Home, FlightMap } from "./pages/customer-pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* customer view */}
      <Route exact path="/" render={() => <Home />} />
      <Route path="/flightinfo" component={FlightInfo} />
      <Route path="/flightmap" component={FlightMap} />
      {/* admin views */}
      <Route exact path="/admin" render={() => <Login />} />
      <Route path="/admin/addflight" component={AddFlight} />
      <Route path="/admin/updateflight" component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;
