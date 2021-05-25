import React, { useContext } from "react";
import PlantContext from "../../context/plantContext";
import PlantBanner from "../../components/PlantBanner";
import Card from "../../components/Card";
import "./PlantDraft.css";
import ppp from "../../images/ppp.jpg";

const PlantDraft = () => {
  const context = useContext(PlantContext);

  const postPlant = async () => {
    const formData = new FormData();
    formData.append("file", context.image);
    formData.append("upload_preset", "rm0vardt");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/the-root-haus/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const file = await res.json();

    const { secure_url } = file;

    const link = await secure_url;

    console.log(link);
  };

  return (
    <div className="plant__draft">
      <PlantBanner imgSrc={context.tempImg || ppp} />
      <Card style={{ marginBottom: 15 }} height={420}>
        <h4 className="plant__draft__title">
          {context.plantName || "Philodendron"}
        </h4>
        <h5 className="plant__draft__nickname">
          {context.nickname || "NickName"}
        </h5>
        <div className="plant__draft__container">
        <div className="plant__draft__care__container">
          <h6 className="plant__draft__header">Lighting</h6>
          <p className="plant__draft__content" >
            {context.lighting || "Let top 50% of soil dry out between watering"}
          </p>
        </div>
        
        <div className="plant__draft__care__container">
          <h6 className="plant__draft__header">Watering</h6>
          <p className="plant__draft__content" >
            {context.watering || "Let top 50% of soil dry out between watering"}
          </p>
        </div>
        <div className="plant__draft__care__container">
          <h6 className="plant__draft__header">Humedity</h6>
          <p className="plant__draft__content" >
            {context.humedity ||
              "between 60-65%, Many philodendrons prefer higher humidity, especially when unfurling new leaves."}
          </p>
        </div>
        </div>
      </Card>
      <button onClick={() => postPlant()} className="plant__draft__btn">Complete</button>
    </div>
  );
};

export default PlantDraft;
