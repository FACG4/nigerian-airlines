import React, {
  Component
} from 'react';



import Login from './login/Login.jsx';
import Flight from './flights/Flight.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfView : 'login',
  
   }  
  }

  render() {
           return (<Flight />);
         
  }
}
export default App;
