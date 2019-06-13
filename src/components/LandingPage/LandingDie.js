import React, { Component } from "react";
import "../../CSS/Die.css";

class LandingDie extends Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
          "shaking"}`}
      />
    );
  }
}

export default LandingDie;
