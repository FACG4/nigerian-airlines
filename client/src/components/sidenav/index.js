import React, { Component } from 'react';
import { Link ,Route  } from 'react-router-dom'
import './sidenav.css'


class Sidenav extends Component {
  render() {
    const { thirdTap } = this.props;
    return (
      <ul className="sidenav-container">

        <li>
        <Link to="/flights">
            <img src={require('./tables.png')} alt='tables' />
            <a href="#">Flights</a>
          </Link>
        </li>

        <li>
         <Link to="/addflight">
            <img src={require('./addtable.png')} alt='atables' />
            <a href="#">Add Flights</a>
         </Link>
        </li>

      { thirdTap &&
        (<li>
           <Link to="/updateflight">
            <img src={require('./edittable.png')} alt='etables' />
            <a href="#">Update flight status</a>
           </Link>
        </li>
        )
      }
      </ul>
    );
  }
}

export default Sidenav;
