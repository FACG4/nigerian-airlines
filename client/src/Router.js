import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { AddFlight, Login, UpdateFlight } from "./admin-pages/pages";
import { FlightRouteTap, Check, MapTap } from "./customer-pages/pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Check />} />
      <Route path="/FlightRouteTap" component={FlightRouteTap} />
      <Route path="/MapTap" component={MapTap} />

      <Route exact path="/admin" render={() => <Login />} />
      <Route path="/admin/addflight" component={AddFlight} />
      <Route path="/admin/updateflight" component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;
