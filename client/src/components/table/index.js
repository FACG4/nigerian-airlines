import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

import './style.css'

class Table extends React.Component{
  constructor(props){
    super(props);
    this.handleFlight = this.handleFlight.bind(this);
  } 
 
  flightDuration=(depature_time,arrival_time) => {        
    const timeStart = new Date("01/01/2018 " + depature_time).getHours();
    const timeEnd = new Date("01/01/2018 " + arrival_time).getHours();
    const duration = timeEnd - timeStart;
    return duration;
  }

  handleFlight() {
    return(<Redirect to={'/updateflight:flight_no'} />)
    // onClick={this.handleFlight(flight.flight_no)}
  }

  render(){
    const { flightsArray } = this.props;
      return(
          <table id ="table" >
            <tbody>
              <tr>
                <th>flight no.</th>
                <th> flight data</th> 
                <th> flight time</th>
                <th> flight duration</th>
              </tr>
              {flightsArray.map(flight => (
                <tr>
                <td>{flight.flight_no}</td>
                <td>{flight.flight_date}</td>
                <td>{flight.depature_time}</td>
                <td>{this.flightDuration(flight.depature_time,flight.arrival_time)}</td>
              </tr>
              ))}  
          </tbody>
        </table>      
      )}
                    
}
export default Table;
