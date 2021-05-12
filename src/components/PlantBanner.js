import React from "react";
import ppp from "../images/ppp.jpg";
import "./PlantBanner.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const PlantBanner = () => {
  const classes = useStyles();
  return (
    <div className="plant__banner__background__container">
      <img src={ppp} className="banner__img" alt="ppp" />
      <div className="plant__banner__image__conatiner">
        <div className="img__circle__border">
          <img src={ppp} className="plant__profile__img" alt="ppp" />
        </div>
      </div>
    </div>
  );
};
export default PlantBanner;
