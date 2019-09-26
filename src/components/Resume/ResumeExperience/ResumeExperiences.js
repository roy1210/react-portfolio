import React, { Fragment } from "react";
import ResumeExperience from "./ResumeExperience";

const ResumeExperiences = () => (
  <Fragment>
    <h3>Work Experience</h3>
    <ResumeExperience
      startYear="2014"
      endYear="Present"
      jobName="SIIX Singapore Pte. Ltd."
      jobTitle="Project / Sales Executive"
      jobDescription1="Primary liaison in managing all sales support functions for Japanese speaking clients"
      jobDescription2="Support new project from the design stage to mass production"
      jobDescription3="Analyze client requirements for all development OEM projects, prepare resources,
      negotiate with suppliers, and plan projects according to the required timeframe"
    />
  </Fragment>
);

export default ResumeExperiences;
