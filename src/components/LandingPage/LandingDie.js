import React, { Component } from "react";
import "../../CSS/Die.css";

class LandingDie extends Component {
  render() {
    const { face, rolling } = this.props;
    return <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />;
  }
}

export default LandingDie;
