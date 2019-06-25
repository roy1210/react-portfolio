import React, { Component } from "react";
import codeSandBox from "../../img/ResumeCodeSandBox.png";
import { List } from "semantic-ui-react";

class ResumeIntroduction extends Component {
  render() {
    const ResumeIntro = (
      <section>
        <h5 className="Resume-txt-center">Hello, world!</h5>
        <p>
          My name is Roy.
          <br />
          I'm a happy learner and I love to learn about new technology every
          day.
          <br />
          I communicate well with people from different cultures.
          <br />
          I'd like to dive into the tech industry because this is the place to
          use technology to make the world a better place!
          <br />
          Now, I'm ready to contribute as a software developer in the global
          environment.
        </p>
        <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
      </section>
    );

    const ResumeContact = (
      <section>
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
      </section>
    );

    const ResumeInterest = (
      <section>
        <h5 className="Resume-txt-center">Skills to learn in 2019-2020</h5>
        <List>
          <List.Item>
            {/* L1 */}
            <List.Icon name="folder open" />
            <List.Content>
              <List.Header>Skills to learn</List.Header>
              <List.Description>
                Source files for keen to learn
              </List.Description>
              {/* L2 */}
              <List.List>
                <List.Item>
                  <List.Icon name="folder open" />
                  <List.Content>
                    <List.Header>JavaScript</List.Header>
                    {/* <List.Description>To develop web App</List.Description> */}
                    {/* L3 */}
                    <List.List>
                      <List.Item>
                        <List.Icon name="folder open" />
                        <List.Content>
                          <List.Header>Library / Framework</List.Header>
                          {/* L4 */}
                          <List.List>
                            <List.Item>
                              <List.Icon
                                name="linkify"
                                style={{ paddingBottom: "0.5em" }}
                              />
                              <List.Content>
                                <List.Header>Redux</List.Header>
                                {/* <List.Description>
                                  Managing application state
                                </List.Description> */}
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="react" />
                              <List.Content>
                                <List.Header>React.js</List.Header>
                                <List.Description>
                                  Keen to learn about Next.js & GatsbyJS
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon
                                name="vuejs"
                                style={{ paddingRight: "0.45em" }}
                              />
                              <List.Content>
                                <List.Header>Vue.js</List.Header>
                                <List.Description>
                                  Keen to learn about Nuxt.js
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon
                          name="js square"
                          style={{ paddingBottom: "0.5em" }}
                        />
                        <List.Content>
                          <List.Header>ES6, ES7</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon
                          name="js square"
                          style={{ paddingBottom: "0.7em" }}
                        />
                        <List.Content>
                          <List.Header>TypeScript</List.Header>
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
                        <List.Icon name="plane" />
                        <List.Content>
                          <List.Header>Drone</List.Header>
                          <List.Description>
                            Controll drone by Gobot and GoCV
                          </List.Description>
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
                          style={{ paddingRight: "0.5em" }}
                        />
                        <List.Content>
                          <List.Header>Django</List.Header>
                          <List.Description>
                            Serving with React.js together
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="plane" />
                        <List.Content>
                          <List.Header>Drone</List.Header>
                          <List.Description>
                            Controll drone by tello edu SDK and openCV
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                    {/* L2-close */}
                  </List.Content>
                </List.Item>

                {/* L2 */}
                <List.Item>
                  <List.Icon name="file code" />
                  <List.Content>
                    <List.Header>Firebase</List.Header>
                    <List.Description>
                      Build serverless web app
                    </List.Description>
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
      </section>
    );

    return (
      <div>
        <h4 className="Resume-name">Shoe Kure (Roy, 呉 書栄)</h4>
        <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
        <div className="Resume-intro">{ResumeIntro}</div>
        <div className="Resume-contact">{ResumeContact}</div>
        <div className="Resume-interest">{ResumeInterest}</div>
      </div>
    );
  }
}

export default ResumeIntroduction;
