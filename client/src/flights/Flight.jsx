import React, {
    Component
  } from 'react';
  import '../App.css';
  import './flight.css';


  import Header from '../header/Header.jsx';
import Sidenav from '../sidenav/Sidenav.jsx';
import Table from '../table/Table.jsx'


  class Flight extends Component {
    constructor(props) {
      super(props);
      }
  
    render() {
      return (
          <div className="flight-container" >
             <Header/>   
            <div className="all-container">
              <div className="sub-containers">
                <Sidenav />
              <div className="sub-container2">
             
              <Table />
              </div>
            </div>
            </div> 
          </div>
    
      );
    }
  
  }
  export default Flight ;  