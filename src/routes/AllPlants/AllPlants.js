import React, { useEffect, useState } from "react";
import PlantApiService from "../../services/plant-api-service";
import PlantCard from "../../components/PlantCard";
import "./AllPlants.css";

const AllPlants = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    PlantApiService.getAllPlants().then((plants) => setAllPlants(plants));
  }, []);

  const populatePlants = () => {
    return allPlants.map((plant, key) => 
      <PlantCard plantId={plant.id} key={key} title={plant.plantname} image={plant.img} />
    );
    
  };

  return (
    <div className="all__plants">
      <h1 className="add__plant__header">All Plants</h1>
      {populatePlants()}
    </div>
  );
};

export default AllPlants;
