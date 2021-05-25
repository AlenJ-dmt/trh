import React from "react";

const PlantContext = React.createContext({
  plantName: "",
  nickname: "",
  lighting: "",
  watering: "",
  humedity: "",
  tempImg: "",
  image: "",
  setImage: () => {},
  setTempImg: () => {},
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
    tempImg: "",
    image: "",
  };

  setImage = (image) => {
    this.setState({
      image: image,
    });
  };

  setTempImg = (temp) => {
    this.setState({
      tempImg: temp,
    });
  };

  setPlantName = (plantName) => {
    this.setState({
      plantName: plantName,
    });
  };
  setNickname = (nickname) => {
    this.setState({
      nickname: nickname,
    });
  };
  setLighting = (lighting) => {
    this.setState({
      lighting: lighting,
    });
  };
  setWatering = (watering) => {
    this.setState({
      watering: watering,
    });
  };
  setHumedity = (humedity) => {
    this.setState({
      humedity: humedity,
    });
  };
  render() {
    const value = {
      plantName: this.state.plantName,
      nickname: this.state.nickname,
      lighting: this.state.lighting,
      watering: this.state.watering,
      humedity: this.state.humedity,
      tempImg: this.state.tempImg,
      image: this.state.image,
      setImage: this.setImage,
      setTempImg: this.setTempImg,
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
