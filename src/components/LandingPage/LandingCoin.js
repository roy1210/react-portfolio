import React from "react";
import Bitcoin from "../../img/LandingPage/Bitcoin.png";
import DogCoin from "../../img/LandingPage/DogCoin.png";

const LandingCoin = ({ info, spinning }) => {
  let pic;
  if (info.side === "bitcoin") {
    pic = <img src={Bitcoin} alt={info.side} />;
  } else if (info.side === "dog-coin") {
    pic = <img src={DogCoin} alt={info.side} />;
  }

  return <div className={spinning ? "Coin-spinning" : "Coin"}>{pic}</div>;
};

export default LandingCoin;
