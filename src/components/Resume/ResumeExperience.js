import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ResumeExperience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3} phone={12}>
          <p>
            {" "}
            {this.props.startYear} - {this.props.endYear}{" "}
          </p>
        </Cell>
        <Cell col={9} phone={12}>
          <h5 style={{ marginTop: "0px" }}>{this.props.jobName}</h5>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default ResumeExperience;
