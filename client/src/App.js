import React, { Component } from 'react';
import Login from './pages/login';
import AddFlight from './pages/addFlight';
import UpdateFlight from './pages/updateFlight';
import './App.css';
import Navbar from './components/navbar/index';
import Flight from './components/table/index';

class App extends Component {
  render() {
    return (
      <div>
      {/* { <Login />} */}
     < Navbar />
     <Flight />
      </div>
    );
  }
}

export default App;
