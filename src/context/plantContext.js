import React from "react";

const PlantContext = React.createContext({
  plantName: "",
  nickname: "",
  lighting: "",
  watering: "",
  humedity: "",
  setPlantName: () => {},
  setNickname: () => {},
  setLighting: () => {},
  setWatering: () => {},
  setHumedity: () => {},
});

export default PlantContext;

export class PlantProvider extends React.Component {
  state = {
    plantName: "",
    nickname: "",
    lighting: "",
    watering: "",
    humedity: "",
  };
  setPlantName(plantName) {
    this.setState({
      plantName: plantName,
    });
  }
  setNickname(nickname) {
    this.setState({
      nickname: nickname,
    });
  }
  setLighting(lighting) {
    this.setState({
      lighting: lighting,
    });
  }
  setWatering(watering) {
    this.setState({
      watering: watering,
    });
  }
  setHumedity(humedity) {
    this.setState({
      humedity: humedity,
    });
  }
  render() {
    const value = {
      plantName: this.state.plantName,
      nickname: this.state.nickname,
      lighting: this.state.lighting,
      watering: this.state.watering,
      humedity: this.state.humedity,
      setPlantName: this.setPlantName,
      setNickname: this.setNickname,
      setLighting: this.setLighting,
      setWatering: this.setWatering,
      setHumedity: this.setHumedity,
    };
    return (
      <PlantContext.Provider value={value}>
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}
