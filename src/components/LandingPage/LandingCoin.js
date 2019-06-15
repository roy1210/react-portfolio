import React, { Component } from "react";

class LandingCoin extends Component {
  render() {
    return (
      <div className={this.props.spinning ? "Coin-spinning" : "Coin"}>
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    );
  }
}

export default LandingCoin;
