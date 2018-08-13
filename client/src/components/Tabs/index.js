import React from "react";

import "./tabs.css";

const Tabs = ({ className }) => (
  <div className="tabs-style">
    <div className={className}>Flight route</div>
    <div className={className}>Map</div>
  </div>
);

export default Tabs;
