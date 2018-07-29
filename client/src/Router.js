import React, { Component } from 'react';
import { Switch, Route ,BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import AddFlight from './pages/addFlight';
import UpdateFlight from './pages/updateFlight';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={({ history }) => (
        <Login username='inass'/>
      )} />
      <Route path='/addflight' component={AddFlight} />
      <Route path='/updateflight' component={UpdateFlight} />
    </Switch>
  </BrowserRouter>
);
export default Router;