import React from "react";
import "./PlantBanner.css";

const PlantBanner = (props) => {
  return (
    <div className="plant__banner__background__container">
      <img src={props.imgSrc} className="banner__img" alt="Plant Image" />
      <div className="plant__banner__image__conatiner">
        <div className="img__circle__border">
          <img
            src={props.imgSrc}
            className="plant__profile__img"
            alt="Plant Image"
          />
        </div>
      </div>
    </div>
  );
};
export default PlantBanner;
