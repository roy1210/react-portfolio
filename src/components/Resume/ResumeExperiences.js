import React, { Fragment } from "react";
import ResumeExperience from "./ResumeExperience";

const ResumeExperiences = () => (
  <Fragment>
    <h3>Job Experience</h3>
    <ResumeExperience
      startYear="2014"
      endYear="Present"
      jobName="SIIX Singapore"
      jobDescription="Sales executive / Project management"
    />
  </Fragment>
);

export default ResumeExperiences;
