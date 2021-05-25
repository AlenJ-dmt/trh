import React, { useState, useEffect } from "react";
import "./PlantCareCard.css";
import Card from "./Card";
import { AiFillCloseCircle } from "react-icons/ai";
import PlantApiService from "../services/plant-api-service";

const PlantCareCard = (props) => {
  const [editMode, setEditmode] = useState(false);

  return (
    <Card
      className={
        props.selectedInfo !== "" ? "slide-in-bck-center" : "scale-out-center"
      }
      style={{ display: props.show ? "flex" : "none" }}
      height={190}
    >
      <div className="plant__care__card">
        <h4 className="plant__title">{props.careTitle}</h4>
        {editMode ? (
          <div className="description__card__container">
            <textarea
              onChange={(ev) => props.onChangeDo(ev.target.value)}
              className="plant__care__description_input"
            >
              {props.infoDescription}
            </textarea>
          </div>
        ) : (
          <div>
            <p className="plant__care__description">{props.infoDescription}</p>
          </div>
        )}
        <div className="button__container">
          {editMode ? (
            <button className="btn" onClick={() => props.onSave()}>
              Save
            </button>
          ) : (
            <button className="btn" onClick={() => setEditmode(true)}>
              Edit
            </button>
          )}
          <div className="close__btn" onClick={props.onClose}>
            <AiFillCloseCircle className="close__btn" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlantCareCard;
