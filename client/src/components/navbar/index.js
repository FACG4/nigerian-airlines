import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import image from  './username.png';
import plan from  './plan.png';
import img from  './newTable.png';
import photo from  './tables.png';

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
         <img src={image} />
                
            </div>
            <div>
            <img className ="plane" src={plan} />
            </div>
        </div>
        <div className="sideDiv">
        <ul>
            <li
                onClick={() => this.handleTabChange('flights')}
                className={this.state.activeTab === 'flights' ? 'active' : ''}
            >
            
           
            <li className="fli">
                <img className ="add"  src= {photo} />
                <a  href={'#'} >Flights</a>
                </li>
                
            </li>
            <li
                // onClick={() => this.handleTabChange('addflights')}
                className={this.state.activeTab === 'addflights' ? 'active' : ''}
            >
                <img className ="addf"  src= {img}/>
                <a href={'#'} >AddFlights</a>
            </li>
        </ul>
        </div>
      </div>

        )

    }
}
export default Navbar;
