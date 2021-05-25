import React, { useContext, useState } from "react";
import PlantContext from "../../context/plantContext";
import PlantBanner from "../../components/PlantBanner";
import Card from "../../components/Card";
import "./PlantDraft.css";
import ppp from "../../images/ppp.jpg";
import PlantApiService from "../../services/plant-api-service";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

const PlantDraft = () => {
  const context = useContext(PlantContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const postPlant = async () => {
    setIsLoading(true);

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

    let newPlant = {
      plantname: context.plantName,
      nickname: context.nickname,
      lighting: context.nickname,
      watering: context.watering,
      humedity: context.humedity,
      img: link,
    };

    console.log(newPlant)

    PlantApiService.addNewPlant(newPlant).then((plant) => {
      setIsLoading(false);
      console.log(plant);
      history.push("/allplants");
    });
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
            <p className="plant__draft__content">
              {context.lighting ||
                "Let top 50% of soil dry out between watering"}
            </p>
          </div>

          <div className="plant__draft__care__container">
            <h6 className="plant__draft__header">Watering</h6>
            <p className="plant__draft__content">
              {context.watering ||
                "Let top 50% of soil dry out between watering"}
            </p>
          </div>
          <div className="plant__draft__care__container">
            <h6 className="plant__draft__header">Humedity</h6>
            <p className="plant__draft__content">
              {context.humedity ||
                "between 60-65%, Many philodendrons prefer higher humidity, especially when unfurling new leaves."}
            </p>
          </div>
        </div>
      </Card>
      {isLoading ? (
        <ReactLoading type="bubbles" color="#2d2d2d" height={50} width={50} />
      ) : (
        <button onClick={() => postPlant()} className="plant__draft__btn">
          Complete
        </button>
      )}
    </div>
  );
};

export default PlantDraft;
