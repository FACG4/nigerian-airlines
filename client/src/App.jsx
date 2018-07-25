import React, {
  Component
} from 'react';

import Login from './pages/login/Login.jsx';
import Flight from './pages/flights/Flight.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfView : 'login',
  
   }  
  }

  render() {
           return (<Login/>);
         
  }
}
export default App;
