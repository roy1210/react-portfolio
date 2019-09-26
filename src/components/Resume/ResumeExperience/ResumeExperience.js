import React from "react";
import { Grid, Cell } from "react-mdl";

const ResumeExperience = ({
  startYear,
  endYear,
  jobName,
  jobTitle,
  jobDescription1,
  jobDescription2,
  jobDescription3
}) => (
  <Grid>
    <Cell col={3} phone={12}>
      <p style={{ color: "white" }}>
        {" "}
        {startYear} - {endYear}{" "}
      </p>
    </Cell>
    <Cell col={9} phone={12}>
      <h5 style={{ marginTop: "0px" }}>{jobName}</h5>
      <p>{jobTitle}</p>
      <ul className="Resume-job-descriptions">
        <li>{jobDescription1}</li>
        <li>{jobDescription2}</li>
        <li>{jobDescription3}</li>
      </ul>
    </Cell>
  </Grid>
);

export default ResumeExperience;
