import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ResumeExperience extends Component {
  render() {
    const { startYear, endYear, jobName, jobDescription } = this.props;

    return (
      <Grid>
        <Cell col={3} phone={12}>
          <p>
            {" "}
            {startYear} - {endYear}{" "}
          </p>
        </Cell>
        <Cell col={9} phone={12}>
          <h5 style={{ marginTop: "0px" }}>{jobName}</h5>
          <p>{jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default ResumeExperience;
