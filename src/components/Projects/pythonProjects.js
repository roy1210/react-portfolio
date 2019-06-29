import React, { Component } from "react";
import { Spinner, Grid, Cell } from "react-mdl";

class PythonProjects extends Component {
  render() {
    return (
      <Grid className="projects-grid">
        <Cell col={4} phone={12}>
          <Spinner />
          <h2>Coming soon</h2>
        </Cell>
      </Grid>
    );
  }
}

export default PythonProjects;
