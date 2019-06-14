import React, { Component } from "react";
import SkillsProgressBuffer from "./SkillsProgressBuffer.js";
import SkillsProgress from "./SkillsProgress.js";

class ResumeSkills extends Component {
  render() {
    return (
      <div className="Resume-skills">
        <h3>Skills</h3>
        <h4>Coding</h4>
        <h5 className="Resume-frontend">Front-end</h5>
        <SkillsProgressBuffer skill="JavaScript" progress={55} />
        <p>Basic syntax for ES6, React and Vue</p>
        <SkillsProgress skill="HTML&CSS" progress={50} />
        <p>Basic syntax for CSS animations, bootstrap</p>
        <h5 className="Resume-backend">Back-end</h5>
        <SkillsProgressBuffer skill="Python" progress={65} />
        <p>
          Basic syntax for Flake8, Unit testing, SQLAlcemy, Pandas, CSV, Logging
          and Django
        </p>
        <SkillsProgress skill="Golang" progress={50} />
        <p>Basic syntax, Gobot.</p>
        <SkillsProgress skill="Solidity" progress={40} />
        <p>
          Basic syntax for web3, making Dapps by Truffle, Metamask, Ganache and
          React
        </p>
        <SkillsProgress skill="Robot" progress={40} />
        <p>Drone: Tello edu by Golang </p>
        <SkillsProgress skill="Network" progress={25} />
        <p>
          Hosting website with Freenom and Netlify. Set own custom domain
          without any cost ( for personal )
        </p>
        <SkillsProgress skill="SQL" progress={35} />
        <p>Basic syntax for SQLite3 and PostgreSQL</p>
        <SkillsProgress skill="Algorism" progress={40} />
        <p>Paiza skill check rank: C (S~E) </p>
        <hr style={{ borderTop: "3px dashed #e22947" }} />
        <h4>Knowledge / Languages</h4>
        <SkillsProgressBuffer skill="Blockchain" progress={75} />
        <SkillsProgress skill="Japanese" progress={100} />
        <SkillsProgress skill="Chinese" progress={85} />
        <SkillsProgress skill="Cantonese" progress={75} />
        <SkillsProgress skill="English" progress={70} />
        <p>TOEIC score: 875</p>
        <a
          href="https://drive.google.com/file/d/0B1XxMJPZzd2sWWZlbkNlRjluQ3M/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Certification
        </a>
        <hr
          style={{
            borderTop: "3px solid #e22947",
            marginTop: "20px"
          }}
        />
      </div>
    );
  }
}

export default ResumeSkills;
