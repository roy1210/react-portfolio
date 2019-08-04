import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import BlockchainScreenshot from "../../img/GolangProjects/190713Blockchain.jpg";
import HttpStatusChecerScreenshot from "../../img/GolangProjects/190713HttpStatusChecer.jpg";
import DigitalClockScreenshot from "../../img/GolangProjects/190717DigitalClock.gif";
import uuid from "uuid/v1";

class GolangProjects extends Component {
  static defaultProps = {
    projects: [
      {
        id: uuid(),
        photoUrl: BlockchainScreenshot,
        name: "Blockchain",
        detail1: "Making Blockchain with POW system.",
        github: "https://github.com/roy1210/Golang_Blockchain"
      },
      {
        id: uuid(),
        photoUrl: DigitalClockScreenshot,
        name: "Digital clock",
        detail1: "A digital clock which runs in the terminal.",
        github: "https://github.com/roy1210/Golang_Digital_Clock"
      },
      {
        id: uuid(),
        photoUrl: HttpStatusChecerScreenshot,
        name: "HTTP status checker",
        detail1:
          "Check the current status of the website. Able to detect if the website is downed due to HTTP request returns 404.",
        github: "https://github.com/roy1210/Golang_Http_Status_checker"
      }
    ]
  };
  render() {
    return (
      <Grid className="projects-grid">
        {this.props.projects.map(props => (
          <Cell col={4} phone={12}>
            <Project
              key={props.id}
              photoUrl={props.photoUrl}
              name={props.name}
              detail1={props.detail1}
              detail2={props.detail2}
              detail3={props.detail3}
              github={props.github}
              siteUrl={props.siteUrl}
              codesandbox={props.codesandbox}
              titleColor={props.titleColor}
              cardColor={props.cardColor}
              textcolor={props.textColor}
              peeredUrl={props.peeredUrl}
            />
          </Cell>
        ))}
      </Grid>
    );
  }
}

export default GolangProjects;
