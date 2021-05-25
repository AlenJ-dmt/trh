import React, { useEffect, useState } from "react";
import Card from "./Card";
import PlantCareCard from "./PlantCareCard";
import PlantApiService from "../services/plant-api-service";
import "./PlantGeneralInformation.css";
import { HiOutlineSun } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { IoWaterOutline } from "react-icons/io5";
import { IoWater } from "react-icons/io5";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";

const PlantGeneralInformation = (props) => {
  const [showLighting, setShowLighting] = useState(false);
  const [showWatering, setShowWatering] = useState(false);
  const [showHumedity, setShowHumedity] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  return (
    <div className="plant__general_info__container">
      <Card style={{ marginBottom: 15 }} height={170}>
        <h4 className="plant__title">{props.plantname}</h4>
        <h5 className="nickname">{props.nickname}</h5>
        <div className="plant__care__menu">
          <div
            onClick={() => {
              setShowLighting(true);
              setShowWatering(false);
              setShowHumedity(false);
              setSelectedInfo("lighting");
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
              setShowWatering(true);
              setShowLighting(false);
              setShowHumedity(false);
              setSelectedInfo("watering");
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
              setShowHumedity(true);
              setShowLighting(false);
              setShowWatering(false);
              setSelectedInfo("humidity");
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
      <PlantCareCard
        careTitle={"Lighting"}
        show={showLighting}
        infoDescription={props.lighting}
        onClose={() => {
          setSelectedInfo("");
          setShowLighting(false);
        }}
        onChangeDo={setUpdateValue}
        onSave={() =>
          PlantApiService.updatePlant(
            props.plantId,
            "lighting",
            updateValue
          ).then(() => setShowHumedity(false))
        }
      />
      <PlantCareCard
        careTitle={"Watering"}
        show={showWatering}
        infoDescription={props.watering}
        onClose={() => {
          setSelectedInfo("");
          setShowWatering(false);
        }}
        onChangeDo={setUpdateValue}
        onSave={() =>
          PlantApiService.updatePlant(
            props.plantId,
            "watering",
            updateValue
          ).then(() => setShowHumedity(false))
        }
      />
      <PlantCareCard
        careTitle={"Humedity"}
        show={showHumedity}
        infoDescription={props.humedity}
        onClose={() => {
          setSelectedInfo("humidity");
          setShowHumedity(false);
        }}
        onChangeDo={setUpdateValue}
        onSave={() => {
          PlantApiService.updatePlant(props.plantId, "humedity", updateValue);
          setShowHumedity(false);
        }}
      />
    </div>
  );
};
export default PlantGeneralInformation;
