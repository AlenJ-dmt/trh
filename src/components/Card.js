import react from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={{ ...props.style, height: props.height }}>
      {props.children}
    </div>
  );
};

export default Card;
