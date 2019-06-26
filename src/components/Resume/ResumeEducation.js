import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ResumeEducation extends Component {
  render() {
    const {
      startYear,
      endYear,
      schoolName,
      schoolDescription,
      certificationUrl,
      schoolRef
    } = this.props;

    return (
      <Grid>
        <Cell col={3} phone={12}>
          <p style={{ color: "white" }}>
            {" "}
            {startYear} - {endYear}{" "}
          </p>
        </Cell>
        <Cell col={9} phone={12}>
          <h5>{schoolName}</h5>
          <p>{schoolDescription}</p>
          <a href={certificationUrl} target="_blank" rel="noopener noreferrer">
            {schoolRef}
          </a>
        </Cell>
      </Grid>
    );
  }
}

export default ResumeEducation;
