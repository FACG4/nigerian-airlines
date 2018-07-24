import React, {
    Component
  } from 'react';
  import '../App.css';
  import './button.css'
  
  
  
  class Button extends Component {
    constructor(props) {
      super(props);
  
      }
  
  
    render() {
      const{
        textvalue
      }=this.props;
      return (
          <div>
<button >{textvalue}</button>
         </div>
    
      );
    }
  
  }
  
  
  export default Button;
  