import React from "react";
import "../../../CSS/Die.css";

const LandingDie = ({ face, rolling }) => (
  <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />
);

export default LandingDie;
