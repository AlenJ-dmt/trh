import react, { useEffect, useState } from "react";
import Card from "./Card";
import "./PlantGeneralInformation.css";
import { HiOutlineSun } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { IoWaterOutline } from "react-icons/io5";
import { IoWater } from "react-icons/io5";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const PlantGeneralInformation = () => {
  const [selectedInfo, setSelectedInfo] = useState("");
  const [infoDescription, setInfoDescription] = useState("");
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [lighting, setLighting] = useState("Medium to bright indirect light");
  const [watering, setWatering] = useState(
    "Let top 50% of soil dry out between watering"
  );
  const [humedity, setHumedity] = useState(
    "between 60-65%, Many philodendrons prefer higher humidity, especially when unfurling new leaves."
  );
  // useEffect(() => {
  //   setShow(false);
  // }, [infoDescription]);

  return (
    <div className="plant__general_info__container">
      <Card style={{ marginBottom: 15 }} height={170}>
        <h4 className="plant__title">Pink Princess</h4>
        <h5 className="nickname">NICKNAME</h5>
        <div className="plant__care__menu">
          <div
            onClick={() => {
              setSelectedInfo("lighting");
              setInfoDescription(lighting);
              setShow(true);
            }}
          >
            {selectedInfo === "lighting" ? (
              <HiSun color="#ffc800" className="plant__care__menu__icon" />
            ) : (
              <HiOutlineSun className="plant__care__menu__icon" />
            )}
          </div>
          <div
            onClick={() => {
              setSelectedInfo("watering");
              setInfoDescription(watering);
            }}
          >
            {selectedInfo === "watering" ? (
              <IoWater color="#3f9dff" className="plant__care__menu__icon" />
            ) : (
              <IoWaterOutline className="plant__care__menu__icon" />
            )}
          </div>
          <div
            onClick={() => {
              setSelectedInfo("humidity");
              setInfoDescription(humedity);
            }}
          >
            {selectedInfo === "humidity" ? (
              <FaThermometerFull
                color="#e51313"
                className="plant__care__menu__icon"
              />
            ) : (
              <FaThermometerEmpty className="plant__care__menu__icon" />
            )}
          </div>
        </div>
      </Card>
      <Card
        className={
          selectedInfo !== "" ? "slide-in-bck-center" : "scale-out-center"
        }
        style={{ display: show ? "flex" : "none" }}
        height={190}
      >
        <div className="plant__care__card">
          <h4 className="plant__title">
            {selectedInfo.charAt(0).toUpperCase() + selectedInfo.slice(1)}
          </h4>
          {editMode ? (
            <div className="description__card__container">
              <textarea
                onChange={(ev) => {
                  switch (selectedInfo) {
                    case "lighting":
                      setLighting(ev.target.value);
                      setInfoDescription(lighting);
                      break;
                    case "watering":
                      setWatering(ev.target.value);
                      setInfoDescription(watering);
                      break;
                    case "humidity":
                      setHumedity(ev.target.value);
                      setInfoDescription(humedity);
                      break;
                  }
                }}
                className="plant__care__description_input"
              >
                {infoDescription}
              </textarea>
            </div>
          ) : (
            <div>
              <p className="plant__care__description">{infoDescription}</p>
            </div>
          )}
          <div className="button__container">
            {editMode ? (
              <button className="btn" onClick={() => setEditMode(false)}>
                Save
              </button>
            ) : (
              <button className="btn" onClick={() => setEditMode(true)}>
                Edit
              </button>
            )}
            <div
              className="close__btn"
              onClick={() => {
                setSelectedInfo("");
                setInfoDescription("");
              }}
            >
              <AiFillCloseCircle className="close__btn" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PlantGeneralInformation;
