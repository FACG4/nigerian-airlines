import React, { Component }from 'react';
import ReactDOM from 'react-dom';

import './style.css'    

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
                <a  href={'#'} >Flights</a>
                </li>
                
            </li>
            <li
                // onClick={() => this.handleTabChange('addflights')}
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
