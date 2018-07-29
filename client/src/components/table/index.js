import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'
class Flight extends React.Component{
  constructor(props){
    super(props);
    this.state={  
      flightNo :'',
      flightDate:'',
      flightTime:'',
      flightDuration:'',
      flightsArray:[]
      
    }
    this.handleChange=this.handleChange.bind(this);
    this.flightDate=this.flightDate.bind(this);
    this.flightTime=this.flightTime.bind(this);
    this.flightDuration=this.flightDuration.bind(this);
  } 
  
  handleChange=(e)=>{
    this.setState({flightNo:e.target.value})
    this.flightDate();
    this.flightTime();
    this.flightDuration();
  }

  
  flightDate=(e)=>{
    this.setState({flightDate:e.target.value})
  }
  flightTime=(e)=>{
    this.setState({flightTime:e.target.value})
  }

  flightDuration=(e)=>{
    this.setState({flightDuration:e.target.value})
  }
    render(){
  

      return(
        

      <div className ="rr">
          <table id ="table"   onChange={(event)=> this.handleChange(event)}>
      
        <tr>
          <th>flight no.</th>
          <th> flight data</th> 
          <th> flight time</th>
          <th> flight duration</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>

       </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

         </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

         </tr>

      </table>
      </div> 
      
      )}
                    
}


export default Flight;
