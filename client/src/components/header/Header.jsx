import React, {
    Component
  } from 'react';
  import '../../App.css';
  import './header.css'
  
  
  class Header extends Component {
    constructor(props) {
      super(props);
  
      }
  
    render() {

      return (
          <div className="headerContainer">
           <a ><img src={require('./plane.png')} className="planeImage"/> </a>
           <a  className="username">Welocom Admin</a>
         </div>
    
      );
    }
  
  }
  
  export default Header;
  