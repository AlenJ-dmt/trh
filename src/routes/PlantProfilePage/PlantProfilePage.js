import React, { useEffect, useState } from "react";
import "./PlantProfilePage.css";
import PlantBanner from "../../components/PlantBanner";
import PlantGeneralInformation from "../../components/PlantGeneralInformation";
import { useParams } from "react-router-dom";
import PlantApiServices from "../../services/plant-api-service";

const PlantProfilePage = () => {
  const { plantId } = useParams();

  const [imgSrc, setImgSrc] = useState("");
  const [plantname, setPlantname] = useState("");
  const [nickname, setNickname] = useState("");
  const [lighting, setLighting] = useState("");
  const [watering, setWatering] = useState("");
  const [humedity, setHumedity] = useState("");

  useEffect(() => {
    PlantApiServices.getPlantById(plantId).then((plant) => {
      console.log(plant[0]);
      setImgSrc(plant[0].img);
      setPlantname(plant[0].plantname);
      setNickname(plant[0].nickname);
      setLighting(plant[0].lighting);
      setWatering(plant[0].watering);
      setHumedity(plant[0].humedity);
    });
  }, []);

  return (
    <div id="plant__profile__page__container">
      <PlantBanner imgSrc={imgSrc} />
      <PlantGeneralInformation
        plantId={plantId}
        plantname={plantname}
        nickname={nickname}
        lighting={lighting}
        watering={watering}
        humedity={humedity}
        setHumedity={setHumedity}
        setLighting={setLighting}
        setWatering={setWatering}
      />
      <h5 id="brand">Powered By The Root Haus</h5>
    </div>
  );
};

export default PlantProfilePage;
