import React from "react";
import PropTypes from "prop-types";

import "./labelimg.css";

const LabelImg = ({ ImgClassName, labelText, imgSrc, ...rest }) => (
  <div className="labelimg-style" {...rest}>
    <img src={imgSrc} className={ImgClassName} alt="img" />
    <label className="label-for-img-style">{labelText}</label>
  </div>
);

LabelImg.propTypes = {
  imgSrc: PropTypes.string,
  labelText: PropTypes.string
};

export default LabelImg;
