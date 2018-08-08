import React from "react";
import PropTypes from "prop-types";

import "./detailscard.css";

const DetailsCard = ({ detailsTitle, detailsInfoArray }) => (
  <div className="center-div">
    <div className="container-card-details">
      <label className="details-title-style">{detailsTitle}</label>
      {detailsInfoArray.map((item, i) => (
        <div key={i} className="labels-container">
          <label className="details-label">{item.subTitle}</label>
          <label className="float-style">{item.titleValue}</label>
        </div>
      ))}
    </div>
  </div>
);

DetailsCard.propTypes = {
  detailsTitle: PropTypes.string,
  detailsInfoArray: PropTypes.array
};

export default DetailsCard;
