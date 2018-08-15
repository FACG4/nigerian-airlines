import React, { Component } from "react";

import "./tabs.css";

class Tabs extends Component {
  goToInfo = () => {
    window.location = "/flightinfo";
  };
  goToMap = () => {
    window.location = "/flightMap";
  };
  render() {
    const { classNameroute, classNameMap } = this.props;
    return (
      <div className="tabs-style">
        <div onClick={this.goToInfo} className={classNameroute}>
          Flight route
        </div>
        <div onClick={this.goToMap} className={classNameMap}>
          Map
        </div>
      </div>
    );
  }
}
export default Tabs;
