import React, { useEffect, useState } from "react";
import Card from "./Card";
import PlantCareCard from "./PlantCareCard";
import PlantApiService from "../services/plant-api-service";
import "./PlantGeneralInformation.css";
import QRCode from "qrcode.react";
import { HiOutlineSun } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { IoWaterOutline } from "react-icons/io5";
import { IoWater } from "react-icons/io5";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";
import { HiOutlineQrcode } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

const PlantGeneralInformation = (props) => {
  const params = useParams();

  const [showLighting, setShowLighting] = useState(false);
  const [showWatering, setShowWatering] = useState(false);
  const [showHumedity, setShowHumedity] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <div className="plant__general_info__container">
      <Card style={{ marginBottom: 15 }} height={170}>
        <h4 className="plant__title">{props.plantname}</h4>
        <div className="sub__headerContainer">
          <h5 className="nickname">{props.nickname}</h5>
          <HiOutlineQrcode
            onClick={() => {
              setShowLighting(false);
              setShowWatering(false);
              setShowHumedity(false);
              setIsQrOpen(true);
            }}
            className="plant__care__menu__icon"
          />
        </div>

        <div className="plant__care__menu">
          <div
            onClick={() => {
              setShowLighting(true);
              setShowWatering(false);
              setShowHumedity(false);
              setIsQrOpen(false);
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
              setIsQrOpen(false);
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
              setIsQrOpen(false);
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
      {isQrOpen && (
        <div className="qr_window">
          <div className="qr__code__container">
            <QRCode
              value={`https://trh-seven.vercel.app/plantProfile/${params.plantId}`}
              renderAs="canvas"
              level="H"
              size={175}
              // bgColor="#1A6426"
              fgColor="#1A6426"
              imageSettings={{
                src: "https://res.cloudinary.com/drfaya2tc/image/upload/v1623075135/trh_o8mzvf.png",
                height: 50,
                width: 50,
              }}
            />
          </div>
          <div className="close__btn" onClick={props.onClose}>
            <AiFillCloseCircle
              onClick={() => setIsQrOpen(false)}
              className="close__btn"
            />
          </div>
        </div>
      )}
      <PlantCareCard
        careTitle="Lighting"
        show={showLighting}
        infoDescription={props.lighting}
        onClose={() => {
          setSelectedInfo("");
          setShowLighting(false);
        }}
        onChangeDo={props.setLighting}
        onSave={() =>
          PlantApiService.updatePlant(
            props.plantId,
            "lighting",
            props.lighting
          ).then(() => setShowHumedity(false))
        }
      />
      <PlantCareCard
        careTitle="Watering"
        show={showWatering}
        infoDescription={props.watering}
        onClose={() => {
          setSelectedInfo("");
          setShowWatering(false);
        }}
        onChangeDo={props.setWatering}
        onSave={() =>
          PlantApiService.updatePlant(
            props.plantId,
            "watering",
            props.watering
          ).then(() => setShowHumedity(false))
        }
      />
      <PlantCareCard
        careTitle="Humedity"
        show={showHumedity}
        infoDescription={props.humedity}
        onClose={() => {
          setSelectedInfo("humidity");
          setShowHumedity(false);
        }}
        onChangeDo={props.setHumedity}
        onSave={() => {
          PlantApiService.updatePlant(
            props.plantId,
            "humedity",
            props.humedity
          );
          setShowHumedity(false);
        }}
      />
    </div>
  );
};
export default PlantGeneralInformation;
