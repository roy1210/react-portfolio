import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";
import Experience from "./experience.js";
import SkillsBuffer from "./skillsBuffer.js";
import Skills from "./skills.js";
import Barcerona from "../img/Barcerona5.jpg";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4} phone={12} tablet={12}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Barcerona}
                alt="avatar"
                className="avatar-img"
                style={{ height: "370px", borderRadius: "10%" }}
              />
            </div>

            <h4>Shoe Kure (Roy)</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <div className="intro">
              <h5>Hello, world!</h5>
              <p>
                My name is Roy.
                <br />
                I'm a happy learner and I love to learn about new technology
                every day.
                <br />
                I communicate well with people from different culutures.
                <br />
                I'd like to dive into the tech industry because this is the
                place to use technology to make the world a better place!
                <br />
                Now, I'm ready to contribute as a software developer in the
                global environment.
              </p>
            </div>
            <div className="contact">
              <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
              <i className="fas fa-map-marked-alt" aria-hidden="true" />
              <span>Singapore</span>
              <br />
              <i className="fas fa-passport" aria-hidden="true" />
              <span> Japan</span>
              <br />
              <i className="fab fa-skype" aria-hidden="true" />
              <span> roy_shoe_wu</span>
              <br />
              <i className="fa fa-envelope" aria-hidden="true" />
              <a href="mailto:rswkure@gmail.com">rswkure@gmail.com</a>
              <br />
              <i class="fab fa-linkedin" aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/roy1210/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.linkedin.com/in/roy1210/
              </a>
              <br />
              <i class="fab fa-github" aria-hidden="true" />
              <a
                href="https://github.com/roy1210"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/roy1210
              </a>

              <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8} phone={12} tablet={12}>
            <div className="skills">
              <h3>Skills</h3>
              <h4>Coding</h4>
              <SkillsBuffer skill="Python" progress={70} />
              <p>
                Basic syntax for Flake8, Unit testing, SQLAlcemy, Pandas, CSV,
                Logging and Django
              </p>
              <SkillsBuffer skill="JavaScript" progress={50} />
              <p>Basic syntax for ES6, React and Vue</p>
              <SkillsBuffer skill="Golang" progress={50} />
              <p>Basic syntax, Gobot.</p>
              <Skills skill="SQL" progress={40} />
              <p>Basic syntax for SQLite3 and PostgreSQL</p>
              <Skills skill="Solidity" progress={40} />
              <p>
                Basic syntax for web3, making transaction by Metamask and
                Ganache, making front-end by React and Truffle
              </p>
              <SkillsBuffer skill="Robot" progress={40} />
              <p>Drone: Tello edu by Golang </p>
              <SkillsBuffer skill="Algorism" progress={50} />
              <p>Paiza skill check rank: C (S~E) </p>
              <hr style={{ borderTop: "3px dashed #e22947" }} />
              <h4>Knowledge / Languages</h4>
              <SkillsBuffer skill="Blockchain" progress={75} />
              <Skills skill="Japanese" progress={100} />
              <Skills skill="Chinese" progress={85} />
              <Skills skill="English" progress={70} />
              <p>TOEIC score: 875</p>
              <a
                href="https://drive.google.com/file/d/0B1XxMJPZzd2sWWZlbkNlRjluQ3M/view?usp=sharing"
                target="_blank"
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
            <div className="education-job">
              <h3>Education</h3>
              <Education
                startYear="2018"
                endYear="2018"
                schoolName="Coursera: The State University of New York"
                schoolDescription="Specialization: Blockchain"
                certificationUrl="https://www.coursera.org/account/accomplishments/specialization/certificate/X7UCYHP8LHQR"
                schoolRef="Certification"
              />
              <Education
                startYear="2018"
                endYear="2018"
                schoolName="edX: University of California, Berkeley"
                schoolDescription="CS198.1x: Bitcoin and Cryptocurrencies"
                certificationUrl="https://courses.edx.org/certificates/16aeb6d5651748da8af03c40ffce5a3e"
                schoolRef="Certification"
              />
              <Education
                startYear="2010"
                endYear="2014"
                schoolName="Academic: Sun Yat-sen University  – Guangdong, China"
                schoolDescription="Bachelor of Management"
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h3>Job Experience</h3>
              <Experience
                startYear="2014"
                endYear="Present"
                jobName="SIIX Singapore"
                jobDescription="Sales executive / Project management"
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
