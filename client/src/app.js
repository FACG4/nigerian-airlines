import React, { Component } from 'react';
import Login from './pages/login';
import AddFlight from './pages/addFlight';
import UpdateFlight from './pages/updateFlight';
import './app.css';
import Navbar from './components/navbar/index';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Login /> */}
     < Navbar />
      </div>
    );
  }
}

export default App;
