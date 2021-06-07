import React from "react";
import "./Main.css";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  const history = useHistory();

  return (
    <div className="main__section">
      <h1 className="main__header">The Root Haus</h1>
      <div className="main__content">
        <div className="main__button__conatiner">
          <button
            onClick={() => history.push("/addNewPlant")}
            className="main__button"
          >
            Add Plant
          </button>
          <button
            onClick={() => history.push("/allPlants")}
            className="main__button"
          >
            All Plants
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
