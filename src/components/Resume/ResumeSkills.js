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
        <SkillsProgressBuffer skill="JavaScript" blank={6} progress={45} />
        <p>Basic syntax for ES6, React.js and Vue.js</p>
        <SkillsProgressBuffer skill="React.js" blank={10} progress={50} />
        <p>Using with React Router, API, Semantic-UI-React, and React-MDL</p>
        <SkillsProgress skill="HTML&CSS" blank={3} progress={50} />
        <p>Basic syntax for CSS animations, Bootstrap</p>
        <h5 className="Resume-backend">Back-end</h5>
        <SkillsProgress skill="Python" blank={11} progress={55} />
        <p>
          Basic syntax for Flake8, Unit testing, SQLAlcemy, Pandas, CSV, Logging
          and Django
        </p>
        <SkillsProgress skill="Golang" blank={11} progress={50} />
        <p>Basic syntax, Gobot, GoCV</p>
        <SkillsProgress skill="Solidity" blank={11} progress={40} />
        <p>
          Basic syntax for web3, making Dapps by Truffle, Metamask, Ganache and
          React.js
        </p>
        <SkillsProgress skill="Robot" blank={13} progress={40} />
        <p>Drone: Tello edu by Golang </p>
        <SkillsProgress skill="Network" blank={9} progress={15} />
        <p>Hosting website with Freenom and Netlify to set own custom domain</p>
        <SkillsProgress skill="SQL" blank={15} progress={35} />
        <p>Basic syntax for SQLite3 and PostgreSQL</p>
        <SkillsProgress skill="Algorism" blank={8} progress={40} />
        <p>Paiza skill check rank: C (S~E) </p>
        <hr style={{ borderTop: "3px dashed #e22947" }} />
        <h4>Knowledge / Languages</h4>
        <SkillsProgressBuffer skill="Blockchain" blank={5} progress={75} />
        <SkillsProgress skill="Japanese" blank={7} progress={100} />
        <SkillsProgress skill="Chinese" blank={9} progress={85} />
        <SkillsProgress skill="Cantonese" blank={5} progress={75} />
        <SkillsProgress skill="English" blank={10} progress={70} />
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
