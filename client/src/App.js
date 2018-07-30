import React, { Component } from 'react';

import { UpdateFlight, AddFlight, Login, Flights } from './pages';
import { Table } from './components';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Flights />
      </div>
    );
  }
}

export default App;
