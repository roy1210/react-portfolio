import React from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";

const GolangProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/Golang_Blockchain/raw/master/GoBlockchain.jpg"
        name="Blockchain"
        detail1="Making Blockchain with POW system."
        github="https://github.com/roy1210/Golang_Blockchain"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/Golang_Digital_Clock/raw/master/clock.gif"
        name="Digital clock"
        detail1="Digital clock which run in the terminal."
        github="https://github.com/roy1210/Golang_Digital_Clock"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/Golang_Http_Status_checker/raw/master/checker.jpg"
        name="HTTP status checker"
        detail1="Check the current status of website. Able to detect if website
                is downed due to http request returns 404."
        github="https://github.com/roy1210/Golang_Http_Status_checker"
      />
    </Cell>
  </Grid>
);

export default GolangProjects;
