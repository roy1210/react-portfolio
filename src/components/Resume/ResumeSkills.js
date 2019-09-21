import React from "react";
import SkillsProgressBuffer from "./SkillsProgressBuffer.js";
import SkillsProgress from "./SkillsProgress.js";
import ResumeOtherSkills from "./ResumeOtherSkills.js";

const ResumeSkills = () => (
  <div className="Resume-skills">
    <h3>Skills</h3>
    <h4>Coding</h4>
    <h5 className="Resume-frontend">Front-end</h5>
    <SkillsProgressBuffer skill="JavaScript" blank={6} progress={40} />
    <p>Basic syntax for ES6, Jest, Chai, Parcel bundler and Faker</p>
    <SkillsProgressBuffer skill="TypeScript" blank={6} progress={30} />
    <p>Design reuseable code with interface and serving with React</p>
    <SkillsProgressBuffer skill="React.js" blank={10} progress={65} />
    <p>
      Develop Web apps with Redux, React Hocks, React Router, Enzyme,
      Semantic-UI-React, Progressive Web App, Axios, Firebase, Firestore,
      MongoDB and SSR with Next.js
    </p>
    <SkillsProgress skill="Firebase" blank={9} progress={20} />
    <p>
      Cloud Firestore (NoSQL), authentication, and hosting for a serverless app
    </p>
    <SkillsProgress skill="HTML&CSS" blank={3} progress={50} />
    <p>Basic Knowledge of HTML5, CSS3, SCSS, and Bootstrap</p>
    <h5 className="Resume-backend">Back-end</h5>
    <SkillsProgress skill="Python" blank={11} progress={40} />
    <p>
      Basic syntax for Flake8, Unit testing, SQLAlcemy, Pandas, CSV, Logging,
      and Django
    </p>
    <SkillsProgress skill="Golang" blank={11} progress={30} />
    <p>Basic syntax for Gobot and GoCV</p>
    {/* <SkillsProgressBuffer skill="PHP" blank={16} progress={15} />
    <p>Basic syntax for PHP 7.2</p> */}
    <SkillsProgress skill="Solidity" blank={11} progress={25} />
    <p>
      Creating a original cryptocurrency with ERC-20, Making Dapps by Truffle
      and serving with React.js
    </p>
    <SkillsProgress skill="Robot" blank={13} progress={40} />
    <p>Drone: Tello edu by Golang </p>
    <SkillsProgress skill="Network" blank={9} progress={15} />
    <p>Hosting website with Freenom and Netlify to set own custom domain</p>
    <SkillsProgress skill="Git" blank={18} progress={40} />
    <p>Manage repositories with Github, Bitbucket and Heroku</p>
    <SkillsProgress skill="SQL" blank={15} progress={25} />
    <p>Basic syntax for SQLite3 and PostgreSQL</p>
    <SkillsProgress skill="Algorism" blank={8} progress={40} />
    <p>Paiza skill check rank: C (S~E) </p>
    <ResumeOtherSkills />
    <hr style={{ borderTop: "3px dashed #e22947" }} />
    <h4>Knowledge / Languages</h4>
    <SkillsProgressBuffer skill="Blockchain" blank={5} progress={55} />
    <SkillsProgress skill="Japanese" blank={7} progress={100} />
    <SkillsProgress skill="Chinese" blank={9} progress={80} />
    <SkillsProgress skill="Cantonese" blank={4} progress={75} />
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

export default ResumeSkills;
