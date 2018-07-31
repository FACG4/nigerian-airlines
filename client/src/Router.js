import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import AddFlight from "./pages/addFlight";
import Login from "./pages/login";
import UpdateFlight from "./pages/updateFlight";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <h3>Home page under construction</h3>}
      />
      <Route exact path="/admin" render={() => <Login />} />
      <Route path="/admin/addflight" component={AddFlight} />
      <Route path="/admin/updateflight" component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;
