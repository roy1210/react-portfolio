import React from "react";
import { Grid, Cell } from "react-mdl";

const ResumeExperience = ({ startYear, endYear, jobName, jobDescription }) => (
  <Grid>
    <Cell col={3} phone={12}>
      <p style={{ color: "white" }}>
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

export default ResumeExperience;
