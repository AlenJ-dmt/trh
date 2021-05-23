import React, { useState } from "react";
import "./AddNewPlant.css";

const AddNewPlant = (propr) => {
  const [state, setState] = useState({
    plantName: "",
    nickname: "",
    lighting: "",
    watering: "",
    humedity: "",
  });

  const [source, setSource] = useState("");

  const inputChangeHandler = (ev) => {
    setState({
      ...state,
      [ev.target.name]: [ev.target.value],
    });
  };

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
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
        accept="image/*"
        placeholder="Add image"
        className="add__plant__image"
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
      <button
        onClick={() => console.log(source)}
        className="add__plant__button"
      >
        Next
      </button>
    </div>
  );
};

export default AddNewPlant;
