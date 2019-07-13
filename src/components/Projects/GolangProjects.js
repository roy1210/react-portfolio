import React from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import BlockchainScreenshot from "../../img/GolangProjects/190713Blockchain.jpg";
import HttpStatusChecerScreenshot from "../../img/GolangProjects/190713HttpStatusChecer.jpg";
import DigitalClockScreenshot from "../../img/GolangProjects/190714DigitalClock.gif";

const GolangProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Project
        photoUrl={BlockchainScreenshot}
        name="Blockchain"
        detail1="Making Blockchain with POW system."
        github="https://github.com/roy1210/Golang_Blockchain"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl={DigitalClockScreenshot}
        name="Digital clock"
        detail1="A digital clock which runs in the terminal."
        github="https://github.com/roy1210/Golang_Digital_Clock"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl={HttpStatusChecerScreenshot}
        name="HTTP status checker"
        detail1="Check the current status of the website. Able to detect if the website
                is downed due to HTTP request returns 404."
        github="https://github.com/roy1210/Golang_Http_Status_checker"
      />
    </Cell>
  </Grid>
);

export default GolangProjects;
