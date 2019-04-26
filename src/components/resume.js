import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";
import Experience from "./experience.js";
import Skills from "./skills.js";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/animal-6/100/5-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>King Gabu (CEO)</h2>
            <h4 style={{ color: "grey" }}>Singer song writer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl
              tempus convallis quis ac lectus. Proin eget tortor risus.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Location</h5>
            <p>Singapore</p>
            <h5>Phone</h5>
            <p>(+65)97722205</p>
            <h5>email</h5>
            <p>rswkure@gmail.com</p>
            <h5>Web</h5>
            <p>google.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
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
