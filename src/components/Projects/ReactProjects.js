import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import { REACT_PROJECTS_DATA } from "./Projects.data.js";

class ReactProjects extends Component {
  static defaultProps = {
    projects: REACT_PROJECTS_DATA
  };

  render() {
    return (
      <Grid className="projects-grid">
        {/* { ...otherSectionProps }: One of the Destructuring assignment. Same key args. Eg. `name = {name}` */}
        {this.props.projects.map(({ ...otherSectionProps }, index) => (
          <Cell col={4} phone={12}>
            <Project key={index} {...otherSectionProps} />
          </Cell>
        ))}
      </Grid>
    );
  }
}

export default ReactProjects;
