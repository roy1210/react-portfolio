import React from "react";
import { RESUME_INTRO, RESUME_CONTACT, RESUME_PLANS } from "./Resume.data";

const ResumeIntroduction = () => {
  return (
    <div className="Resume-intro-block">
      <h4 className="Resume-name">Shoe Kure (Roy, 呉 書栄)</h4>
      <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
      <div className="Resume-intro">{RESUME_INTRO}</div>
      <div className="Resume-contact">{RESUME_CONTACT}</div>
      <div className="Resume-plans">{RESUME_PLANS}</div>
    </div>
  );
};

export default ResumeIntroduction;
