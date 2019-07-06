import React, { Fragment } from "react";
import codeSandBox from "../../img/ResumeCodeSandBox.png";
import { List } from "semantic-ui-react";

const ResumeIntro = (
  <Fragment>
    <h5 className="Resume-txt-center">Hello, world!</h5>
    <p>Hi, this is Roy.</p>
    <p>
      I'm a happy learner and I love to learn about new technology every day.
      <br />
      I'd like to dive into the tech industry because this is the place to use
      technology to make the world a better place!
    </p>
    <p>
      Now, I'm ready to contribute as a software developer and leveling up one
      day at a time.
      {/* As a software developer, I'm ready to contribute and leveling up one day at a time. */}
    </p>
    <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
  </Fragment>
);

const ResumeContact = (
  <Fragment>
    <h5 className="Resume-txt-center">About / Contact</h5>
    <i className="fas fa-map-marked-alt" aria-hidden="true" />
    <span>Singapore</span>
    <br />
    <i className="fas fa-passport" aria-hidden="true" />
    <span className="Resume-contact-adj">Japan</span>
    <br />
    <i className="fab fa-skype" aria-hidden="true" />
    <span className="Resume-contact-adj">roy_shoe_wu</span>
    <br />
    <i className="fa fa-envelope" aria-hidden="true" />
    <a href="mailto:rswkure@gmail.com">rswkure@gmail.com</a>
    <br />
    <div className="Resume-linkedin">
      <i className="fab fa-linkedin" aria-hidden="true" />
      <a
        href="https://www.linkedin.com/in/roy1210/"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://linkedin.com/in/roy1210
      </a>
    </div>
    <i className="fab fa-github" aria-hidden="true" />
    <a
      href="https://github.com/roy1210"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://github.com/roy1210
    </a>
    <br />
    <div className="Resume-codeSandBox">
      {/* Traffic stats:	http://bit.do/codesandbox-roy- */}
      <img src={codeSandBox} alt="CodeSandBox" />
      <a
        href="https://codesandbox.io/u/roy1210/sandboxes"
        rel="noopener noreferrer"
        target="_blank"
      >
        http://bit.do/codesandbox-roy
      </a>
    </div>
    <div className="Resume-home">
      <i className="fas fa-home" aria-hidden="true" />
      <a
        href="https://github.com/roy1210"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://roy-k.tk
      </a>
    </div>
    <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
  </Fragment>
);

const thisYear = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;

const ResumePlans = (
  <Fragment>
    <h5 className="Resume-txt-center">
      {thisYear}-{nextYear} Study plans
    </h5>
    <List>
      <List.Item>
        {/* L1 */}
        <List.Icon name="folder open" />
        <List.Content>
          <List.Header>
            SkillsToLearn
            <span className="Resume-plans-description">
              : Source files for keen to learn
            </span>
          </List.Header>

          {/* L2 */}
          <List.List>
            <List.Item>
              <List.Icon name="folder open" />
              <List.Content>
                <List.Header>JavaScript</List.Header>
                {/* L3 */}
                <List.List>
                  <List.Item>
                    <List.Icon name="folder open" />
                    <List.Content>
                      <List.Header>Library</List.Header>
                      {/* L4 */}
                      <List.List>
                        <List.Item>
                          <List.Icon
                            name="refresh"
                            style={{ paddingBottom: "0.55em" }}
                          />
                          <List.Content>
                            <List.Header>Redux</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon
                            name="react"
                            style={{ paddingBottom: "0.55em" }}
                          />
                          <List.Content>
                            <List.Header>
                              React.js
                              <span className="Resume-plans-description">
                                : React Native & GatsbyJS
                              </span>
                            </List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon
                            name="vuejs"
                            style={{
                              paddingRight: "0.45em",
                              paddingBottom: "0.55em"
                            }}
                          />
                          <List.Content>
                            <List.Header>Vue.js</List.Header>
                          </List.Content>
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="js square"
                      style={{ paddingBottom: "0.55em" }}
                    />
                    <List.Content>
                      <List.Header>ES6</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="js square"
                      style={{ paddingBottom: "0.55em" }}
                    />
                    <List.Content>
                      <List.Header>TypeScript</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="node js"
                      style={{ paddingBottom: "0.7em", paddingRight: "0.3em" }}
                    />
                    <List.Content>
                      <List.Header>Node.js</List.Header>
                    </List.Content>
                  </List.Item>
                </List.List>
                {/* L2-close */}
              </List.Content>
            </List.Item>

            {/* L2 */}
            <List.Item>
              <List.Icon name="folder open" />
              <List.Content>
                <List.Header>Golang</List.Header>
                <List.List>
                  <List.Item>
                    <List.Icon
                      name="plane"
                      style={{ paddingBottom: "0.7em" }}
                    />
                    <List.Content>
                      <List.Header>
                        Drone
                        <span className="Resume-plans-description">
                          : Gobot & GoCV
                        </span>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List.List>
                {/* L2 close */}
              </List.Content>
            </List.Item>

            {/* L2 */}
            <List.Item>
              <List.Icon name="folder open" />
              <List.Content>
                <List.Header>Python</List.Header>
                {/* L3 */}
                <List.List>
                  <List.Item>
                    <List.Icon
                      name="python"
                      style={{
                        paddingRight: "0.5em",
                        paddingBottom: "0.55em"
                      }}
                    />
                    <List.Content>
                      <List.Header>
                        Django
                        <span className="Resume-plans-description">
                          : Serving with React.js
                        </span>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="plane"
                      style={{ paddingBottom: "0.7em" }}
                    />
                    <List.Content>
                      <List.Header>
                        Drone
                        <span className="Resume-plans-description">
                          : Tello edu SDK & openCV
                        </span>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List.List>
                {/* L2-close */}
              </List.Content>
            </List.Item>

            {/* L2 */}
            <List.Item>
              <List.Icon
                name="gripfire"
                style={{ paddingBottom: "0.55em", paddingRight: "0.5em" }}
              />
              <List.Content>
                <List.Header>Firebase</List.Header>
              </List.Content>
            </List.Item>
            {/* L2 */}
            <List.Item>
              <List.Icon
                name="mobile alternate"
                style={{ paddingBottom: "0.55em", paddingRight: "0.7em" }}
              />
              <List.Content>
                <List.Header>Progressive Web Apps</List.Header>
              </List.Content>
            </List.Item>
            {/* L2 */}
            <List.Item>
              <List.Icon name="sun" style={{ paddingBottom: "0.55em" }} />
              <List.Content>
                <List.Header>GraphQL</List.Header>
              </List.Content>
            </List.Item>
            {/* L2 */}
            <List.Item>
              <List.Icon name="chain" />
              <List.Content>
                <List.Header>Blockchain</List.Header>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      {/* L1 */}
      {/* <List.Item style={{ paddingTop: "1em" }}>
          <List.Icon name="file code" />
          <List.Content>
            <List.Header>PortfolioWebsite.jsx</List.Header>
            <List.Description>
              Deploy my portfolio website
            </List.Description>
          </List.Content>
        </List.Item> */}
    </List>
    <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
  </Fragment>
);

const ResumeIntroduction = () => {
  return (
    <div className="Resume-intro-block">
      <h4 className="Resume-name">Shoe Kure (Roy, 呉 書栄)</h4>
      <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
      <div className="Resume-intro">{ResumeIntro}</div>
      <div className="Resume-contact">{ResumeContact}</div>
      <div className="Resume-plans">{ResumePlans}</div>
    </div>
  );
};

export default ResumeIntroduction;
