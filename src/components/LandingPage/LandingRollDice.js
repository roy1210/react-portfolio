import React, { Component } from "react";
import LandingDie from "./LandingDie";
import "../../CSS/RollDice.css";

class LandingRollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
    fun: [
      "Favorite movie: The Matrix",
      "Favorite book: Digital Gold",
      "Favorite motto: Learn from yesterday, live for today, hope for tomorrow",
      "Finishing time for full marathon (42.195km): 6h 45m",
      "Reached peak of Mt. Fuji in 9h",
      "Favorite author: Yoichi Ochiai"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { die: "one", rolling: false, total: 0 };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // pick 2 rolls
    // pick array index
    const newRandomDie1 = Math.floor(Math.random() * this.props.sides.length);
    const totalSum = newRandomDie1 + 1;
    const newDie = this.props.sides[newRandomDie1];
    this.setState({
      die: newDie,
      rolling: true,
      total: totalSum
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    let funFact;
    if (this.state.total > 0) {
      funFact = (
        <div>
          <h5>Fun fact #{this.state.total}</h5>
          <h5>{this.props.fun[this.state.total - 1]}</h5>
        </div>
      );
    } else {
      funFact = "";
    }
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <LandingDie face={this.state.die} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
        {funFact}
      </div>
    );
  }
}

export default LandingRollDice;
