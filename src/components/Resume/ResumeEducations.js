import React, { Fragment } from "react";
import ResumeEducation from "./ResumeEducation";

const ResumeEducations = () => (
  <Fragment>
    <h3>Education</h3>
    <ResumeEducation
      startYear="2018"
      endYear="2018"
      schoolName="The State University of New York – MOOC, Coursera"
      schoolDescription="Specialization: Blockchain"
      certificationUrl="https://www.coursera.org/account/accomplishments/specialization/certificate/X7UCYHP8LHQR"
      schoolRef="Certification"
    />
    <ResumeEducation
      startYear="2018"
      endYear="2018"
      schoolName="University of California, Berkeley – MOOC, edX"
      schoolDescription="CS198.1x: Bitcoin and Cryptocurrencies"
      certificationUrl="https://courses.edx.org/certificates/16aeb6d5651748da8af03c40ffce5a3e"
      schoolRef="Certification"
    />
    <ResumeEducation
      startYear="2010"
      endYear="2014"
      schoolName="Sun Yat-sen University – Guangdong, China"
      schoolDescription="Bachelor of Management"
    />
    <hr style={{ borderTop: "3px solid #e22947" }} />
  </Fragment>
);

export default ResumeEducations;
