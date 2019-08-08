import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import MarketplaceScreenshot from "../../img/DappsProjects/190808Marketplace.jpg";

class DaapsProjects extends Component {
  static defaultProps = {
    projects: [
      {
        photoUrl: MarketplaceScreenshot,
        name: "Marketplace",
        detail1: "Marketplace dApps. Be able to make transaction by Ether.",
        detail2: "Tools: React, Web3, Truffle, Chai",
        detail3: "Live: Choose the `Kovan` networks in Metamask",
        github: "https://github.com/roy1210/react-dapp-marketplace",
        siteUrl: "https://marketplace-dapp-k.netlify.com",
        titleColor: "black"
      }
    ]
  };
  render() {
    return (
      <Grid className="projects-grid">
        {this.props.projects.map(({ ...otherSectionProps }, index) => (
          <Cell col={4} phone={12}>
            <Project key={index} {...otherSectionProps} />
          </Cell>
        ))}
      </Grid>
    );
  }
}

export default DaapsProjects;
