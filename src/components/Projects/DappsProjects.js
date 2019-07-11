import React from "react";
import { Spinner, Grid, Cell } from "react-mdl";

const DaapsProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Spinner />
      <h2>Coming soon</h2>
    </Cell>
  </Grid>
);

export default DaapsProjects;
