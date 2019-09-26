import React from "react";
import { Grid, Cell } from "react-mdl";

const ResumeEducation = ({
  startYear,
  endYear,
  schoolName,
  schoolDescription,
  certificationUrl,
  schoolRef
}) => {
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
};

export default ResumeEducation;
