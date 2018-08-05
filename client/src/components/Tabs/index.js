import React from "react";

import "./tabs.css";

const Tabs = ({ classNameroute, classNameMap }) => (
  <div className="tabs-style">
    <div className={classNameroute}>Flight route</div>
    <div className={classNameMap}>Map</div>
  </div>
);

export default Tabs;
