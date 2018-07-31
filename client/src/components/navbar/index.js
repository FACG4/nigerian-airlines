import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css'    
import { log } from 'util';

class Navbar extends Component{
    constructor() {
         super();
         this.state={
         activeTab: 'flights'
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }
    handleTabChange(activeTab) {
        this.setState({
         ...this.state,
        activeTab
        })
    } 
    componentDidMount() {
      console.log('abc')
      axios.get('/getFlightData')
        .then(res => {
          this.setState({...res}, () => console.log(this.state))
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
      <div>    
         <div className = "nav">
         <div className ="user">
         <a className="username" href={'#'} >username</a>
         <img src={'/images/username.png'} />
      </div>
      <div>
        <img className ="plane" src={'/images/plan.png'} />
        </div>
      </div>
        <div className="sideDiv">
        <ul>
            <li
              onClick={() => this.handleTabChange('flights')}
              className={this.state.activeTab === 'flights' ? 'active' : ''}
            >
            <li className="fli">
                <img className ="add"  src= {'/images/tables.png'} />
                <a  href="getFlightData" >Flights</a>
                </li>
            </li>
            <li
              className={this.state.activeTab === 'addflights' ? 'active' : ''}
            >
              <img className ="addf"  src= {'/images/newTable.png'}/>
              <a href={'#'} >AddFlights</a>
            </li>
        </ul>
        </div>
      </div>
    )
  }
}
export default Navbar;
