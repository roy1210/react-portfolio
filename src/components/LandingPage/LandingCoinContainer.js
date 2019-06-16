import React, { Component } from "react";
import { choice } from "./LandingHelpers";
import LandingCoin from "./LandingCoin";
import "../../CSS/CoinContainer.css";

class LandingCoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "bitcoin",
        imgSrc:
          "https://cdn.shopify.com/s/files/1/1277/7365/products/bitcoin-ag-obverse_740x.png?v=1547616796"
      },
      {
        side: "dog-coin",
        imgSrc:
          "https://www.wildtornado.com/blog/wp-content/uploads/2018/08/0f21b-dog-291x300.png"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      win: 0,
      lose: 0,
      spin: false,
      betOn: null
    };
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      let newState = {
        ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        win: st.win + (newCoin.side === this.state.betOn ? 1 : 0),
        lose: st.lose + (newCoin.side !== this.state.betOn ? 1 : 0),
        spin: true
      };
      setTimeout(() => {
        this.setState({ spin: false });
      }, 500);
      return newState;
    });
  }

  async handleClick(e) {
    await this.setState(() => {
      return { betOn: e };
    });
    console.log(this.state.betOn);
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2 className="CoinContainer-fade-in one">
          Flip a coin, challenge me!
        </h2>
        {this.state.currCoin && (
          <LandingCoin info={this.state.currCoin} spinning={this.state.spin} />
        )}
        <button
          onClick={this.handleClick.bind(this, "bitcoin")}
          disabled={this.state.spin}
        >
          {this.state.spin ? "Flipping..." : "Bet on Bitcoin"}
        </button>
        <button
          onClick={this.handleClick.bind(this, "dog-coin")}
          disabled={this.state.spin}
        >
          {this.state.spin ? "Flipping..." : "Bet on Dog-coin"}
        </button>
        {this.state.win > this.state.lose && (
          <div className="CoinContainer-win">
            <h2>
              Congrats, you have <span>won</span> {this.state.win} /{" "}
              {this.state.nFlips} times
            </h2>
          </div>
        )}
        {this.state.lose > this.state.win && (
          <div className="CoinContainer-lose">
            <h2>
              Oh no, you have <span>lost</span> {this.state.lose} /{" "}
              {this.state.nFlips} times
            </h2>
          </div>
        )}
        {this.state.lose === this.state.win && this.state.nFlips > 0 && (
          <div>
            <div className="CoinContainer-even">
              <h2>
                Now, we are <span>even</span>
              </h2>
            </div>
            <div className="CoinContainer-win">
              <h2>
                We both have <span>won</span> {this.state.win} /{" "}
                {this.state.nFlips} times
              </h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LandingCoinContainer;
