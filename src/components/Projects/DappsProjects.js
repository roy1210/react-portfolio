import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import { DAPPS_PROJECTS_DATA } from "./Projects.data";

class DaapsProjects extends Component {
  static defaultProps = {
    projects: DAPPS_PROJECTS_DATA
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
