import React, { Component } from 'react';
import '../../App.css';
import './sidenav.css'

class Sidenav extends Component {
  render() {
    const { thirdTap } = this.props;
    return (
      <div className="sidenav-container">

        <div className="flights">
          <img src={require('./tables.png')} alt='tables' />
          <a>Flights</a>
        </div>

        <div className="add-flight">
          <img src={require('./addtable.png')} alt='atables' />
          <a>Add Flights</a>
        </div>

      { thirdTap &&
        (<div className="update-flight">
          <img src={require('./edittable.png')} alt='etables' />
          <a>Update flight status</a>
        </div>)
      }
      </div>
    );
  }
}

export default Sidenav;
