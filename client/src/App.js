import React, { Component } from 'react';
import Login from './pages/login';
// import Flight from './pages/flights';
import AddFlight from './pages/addFlight';
import UpdateFlight from './pages/updateFlight';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfView : 'login',
   }
 }
  render() {
    return (
      <Login />
    );
  }
}

export default App;
