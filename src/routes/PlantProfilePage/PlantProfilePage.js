import react from "react";
import "./PlantProfilePage.css";
import PlantBanner from "../../components/PlantBanner";
import Card from "../../components/Card";
import PlantGeneralInformation from "../../components/PlantGeneralInformation";

const PlantProfilePage = () => {
  return (
    <div id="plant__profile__page__container">
      <PlantBanner />
      <PlantGeneralInformation />
    </div>
  );
};

export default PlantProfilePage;
