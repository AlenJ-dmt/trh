import config from "../config";

const PlantApiService = {
  getAllPlants() {
    return fetch(`${config.API_ENDPOINT}/api/plant/all`).then((res) =>
      res.json()
    );
  },
  getPlantById(plantId) {
    return fetch(
      `${config.API_ENDPOINT}/api/plant/getPlantById?plantId=${plantId}`
    ).then((wRepair) => wRepair.json());
  },
  addNewPlant(newPlant) {
    return fetch(`${config.API_ENDPOINT}/api/plant/addNewPlant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });
  },
  updatePlant(plantId, care, updateValue) {
    return fetch(`${config.API_ENDPOINT}/api/plant/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: plantId,
        care: care,
        updateValue: updateValue,
      }),
    });
  },
};

export default PlantApiService;
