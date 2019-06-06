import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";
import Experience from "./experience.js";
import Skills from "./skills.js";
import Barcerona5 from "../img/Barcerona5.jpg";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Barcerona5}
                alt="avatar"
                className="avatar-img"
                style={{ height: "500px" }}
              />
            </div>

            <h3 style={{ paddingTop: "1em", color: "black" }}>
              Shoe Kure (Roy)
            </h3>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

            <h4>Hello, world!</h4>
            <p>
              My name is Roy.
              <br />
              I'm a happy learner as I love to touch the new technology every
              day.
              <br />
              I'd like to dive into the tech industry because this is the place
              to use the cutting edge technology to make the world a better
              place!
              <br />
              <br />
              Other than programing language, I can speak Japanese, Chinese and
              English as I have lived in Japan, China and Singapore.
              <br />
              Now, I'm ready to contribute as a software developer in the global
              environment.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

            <h5>Location</h5>
            <p>Singapore</p>
            <h5>Phone</h5>
            <p>(+65)97722205</p>
            <h5>Email</h5>
            <a href="mailto:rswkure@gmail.com">rswkure@gmail.com</a>
            <h5>Web</h5>
            <a href="https://roy1210.netlify.com/">
              https://roy1210.netlify.com/
            </a>

            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            {/* {2012}: "2012"でもOK、ただ 2012 のようにintでは渡せられない。" " or { } じゃないと。 */}

            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Animal Kindergarten"
              schoolDescription="Nulla quis lorem ut libero malesuada feugiat."
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Animal School"
              schoolDescription="Nulla quis lorem ut libero malesuada feugiat. "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Broadway dancer"
              jobDescription="Nulla quis lorem ut libero malesuada feugiat. "
            />
            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Broadway singer"
              jobDescription="Nulla quis lorem ut libero malesuada feugiat. "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Sing" progress={100} />

            <Skills skill="Dance" progress={95} />
            <Skills skill="Managing" progress={60} />
            <Skills skill="Math" progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
