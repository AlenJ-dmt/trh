import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import PlantContext from "../../context/plantContext";
import "./AddNewPlant.css";

const AddNewPlant = (propr) => {
  const context = useContext(PlantContext);

  const history = useHistory();

  const [state, setState] = useState({
    plantName: "",
    nickname: "",
    lighting: "",
    watering: "",
    humedity: "",
  });

  const [image, setImage] = useState(false);

  const inputChangeHandler = (ev) => {
    setState({
      ...state,
      [ev.target.name]: [ev.target.value],
    });
  };

  const moveToDraft = () => {
    const objectURL = URL.createObjectURL(image);
    context.setTempImg(objectURL);
    context.setImage(image);
    context.setPlantName(state.plantName);
    context.setNickname(state.nickname);
    context.setLighting(state.lighting);
    context.setWatering(state.watering);
    context.setHumedity(state.humedity);
    history.push("/plantDraft");
  };

  

  return (
    <div className="add__plant__section">
      <h1 className="add__plant__header">Add New Plant</h1>
      <form className="add__plant__form">
        <div className="input__container">
          <label className="add__plant__label">Name</label>
          <input
            placeholder="Philodendron..."
            onChange={(ev) => inputChangeHandler(ev)}
            className="add__plant__input"
            name="plantName"
          />
        </div>
        <div className="input__container">
          <label className="add__plant__label">Nickname</label>
          <input
            placeholder="My plant..."
            onChange={(ev) => inputChangeHandler(ev)}
            className="add__plant__input"
            name="nickname"
          />
        </div>
        <div className="input__container">
          <label className="add__plant__label">Lighting</label>
          <textarea
            placeholder="Indirect light..."
            onChange={(ev) => inputChangeHandler(ev)}
            className="add__plant__input"
            name="lighting"
          />
        </div>
        <div className="input__container">
          <label className="add__plant__label">Watering</label>
          <textarea
            placeholder="Low water..."
            onChange={(ev) => inputChangeHandler(ev)}
            className="add__plant__input"
            name="watering"
          />
        </div>
        <div className="input__container">
          <label className="add__plant__label">Humedity</label>
          <textarea
            placeholder="High humedity..."
            onChange={(ev) => inputChangeHandler(ev)}
            className="add__plant__input"
            name="humedity"
          />
        </div>
      </form>

      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={() => moveToDraft()} className="add__plant__button">
        Next
      </button>
    </div>
  );
};

export default AddNewPlant;
