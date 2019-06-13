import React, { Component } from "react";
import ResumeExperience from "./ResumeExperience";

class ResumeExperiences extends Component {
  render() {
    return (
      <div>
        <h3>Job Experience</h3>
        <ResumeExperience
          startYear="2014"
          endYear="Present"
          jobName="SIIX Singapore"
          jobDescription="Sales executive / Project management"
        />
      </div>
    );
  }
}

export default ResumeExperiences;
