import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ResumeEducations from "./Resume/ResumeEducations";
import ResumeExperiences from "./Resume/ResumeExperiences";
import ResumeSkills from "./Resume/ResumeSkills";
import ResumeIntroduction from "./Resume/ResumeIntroduction";
import Barcerona from "../img/Barcerona.jpg";
import "../CSS/Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Grid>
          <Cell col={4} phone={12} tablet={12}>
            <div className="Resume-fade-in one Resume-avatar">
              <img src={Barcerona} alt="avatar" />
            </div>
            <div className="Resume-fade-in two">
              <ResumeIntroduction />
            </div>
          </Cell>
          <Cell className="Resume-right-col" col={8} phone={12} tablet={12}>
            <div className="Resume-fade-in three">
              <div className="Resume-skills">
                <ResumeSkills />
              </div>
              <div className="Resume-education-job">
                <ResumeEducations />
                <ResumeExperiences />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
