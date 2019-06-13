import React, { Component } from "react";
import profile from "../../img/profile.jpg";
import LandingRollDice from "./LandingRollDice";

class LandingCard extends Component {
  render() {
    return (
      <div id="Landing-f1_container">
        <div id="Landing-f1_card" className="Landing-shadow">
          <div class="front Landing-face">
            <img src={profile} alt="avatar" className="Landing-profile" />
          </div>
          <div className="back Landing-face center">
            <h3>You got me!</h3>
            <LandingRollDice />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingCard;
