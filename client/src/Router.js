import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AddFlight, Login, UpdateFlight } from "./pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <h3>Home page under construction</h3>}
      />
      <Route path="/admin" render={() => <Login />} />
      <Route path="/addflight" component={AddFlight} />
      <Route path="/updateflight" component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;
