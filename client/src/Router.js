import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import {
  AddFlight,
  Login,
  UpdateFlight
} from './pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path='/'
        render={({ history }) => <Login username='inass' />}
        // render={() => (loggedIn ? <Redirect to="/AddFlight " /> : <Login />)}
      />
      <Route path='/addflight' component={AddFlight} />
      <Route path='/updateflight' component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);

export default Router;
