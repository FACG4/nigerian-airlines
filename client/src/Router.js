import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import AddFlight from "./pages/addFlight";
import Login from "./pages/login";
import UpdateFlight from "./pages/updateFlight";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/addflight" component={AddFlight} />
      <Route path="/updateflight" component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;