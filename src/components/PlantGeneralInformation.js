import react, { useState } from "react";
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

  return (
    <div className="plant__general_info__container">
      <Card style={{ marginBottom: 15 }} height={170}>
        <h4 className="plant__title">Pink Princess</h4>
        <h5 className="nickname">NICKNAME</h5>
        <div className="plant__care__menu">
          <div
            onClick={() => {
              setSelectedInfo("lighting");
              setInfoDescription("Medium to bright indirect light");
              setShow(true);
            }}
          >
            {selectedInfo === "lighting" ? (
              <HiSun className="plant__care__menu__icon" />
            ) : (
              <HiOutlineSun className="plant__care__menu__icon" />
            )}
          </div>
          <div
            onClick={() => {
              setSelectedInfo("watering");
              setInfoDescription(
                "Let top 50% of soil dry out between watering"
              );
            }}
          >
            {selectedInfo === "watering" ? (
              <IoWater className="plant__care__menu__icon" />
            ) : (
              <IoWaterOutline className="plant__care__menu__icon" />
            )}
          </div>
          <div
            onClick={() => {
              setSelectedInfo("humidity");
              setInfoDescription(
                "between 60-65%, Many philodendrons prefer higher humidity, especially when unfurling new leaves."
              );
            }}
          >
            {selectedInfo === "humidity" ? (
              <FaThermometerFull className="plant__care__menu__icon" />
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
          <p className="plant__care__description">{infoDescription}</p>
          <div
            onClick={() => {
              setSelectedInfo("");
              setInfoDescription("");
            }}
          >
            <AiFillCloseCircle className="close__btn" />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PlantGeneralInformation;
