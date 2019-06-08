import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
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
          <h5 style={{ marginTop: "5px", marginBottom: "0px" }}>
            {this.props.schoolName}
          </h5>
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
