import React, {
    Component
  } from 'react';
  import '../../App.css';
  import './input.css';

  class Input extends Component {
    constructor(props) {
      super(props);
      }
  
    render() {
      const {
        className,
        placeholder
        } = this.props;
        console.log(this.props)
      return (
           <input className={className} placeholder={placeholder}/>
         
      );
    }
  
  }
  
  
  export default Input;
  