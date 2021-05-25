import React, { useState } from "react";
import "./PlantCard.css";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const PlantCard = (props) => {
  const history = useHistory();
  const moveToView = () => {
    history.push(`/plantProfile/${props.plantId}`);
  };

  return (
    <Card style={{ marginBottom: 15, background: "#333333" }} height={120}>
      <div className="plant__card__container">
        <div className="plant__card__img__holder">
          <div className="plant__card__img__circle">
            <img
              src={props.image}
              className="plant__card__img"
              alt="Plant Image"
            />
          </div>
        </div>
        <div className="plant__card__description">
          <h3>{props.title}</h3>
          <div className="plant__card__button__container">
            <button className="plant__card__btn delete">Delete</button>
            <button onClick={() => moveToView()} className="plant__card__btn details">View</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlantCard;
