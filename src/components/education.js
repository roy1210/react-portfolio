import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} phone={12}>
          <p>
            {" "}
            {this.props.startYear} - {this.props.endYear}{" "}
          </p>
        </Cell>
        <Cell col={8} phone={12}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <a href={this.props.certificationUrl} target="_blank">
            {this.props.schoolRef}
          </a>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
