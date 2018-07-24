import React, {
    Component
  } from 'react';
  import '../App.css';
  import './sidenav.css'
    
  class Sidenav extends Component {
    constructor(props) {
      super(props);
      }
  
  
    render() {
      return (
        <div className="sub-container1">
        <div className="flights">
         <i className="fas fa-table"></i> 
        <a >Flights</a>
        </div>

        <div className="add-flight">
            <i className="fa  fa-plus-circle"></i> 
        <a >Add Flights</a>
        </div>

           </div>
      );
    }
  
  }
  
  export default Sidenav;