import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import { GOLANG_PROJECTS_DATA } from "./Projects.data";

class GolangProjects extends Component {
  static defaultProps = {
    projects: GOLANG_PROJECTS_DATA
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

export default GolangProjects;
