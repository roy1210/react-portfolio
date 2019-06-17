import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import LandingPlayground from "./LandingPage/LandingPlayground";
import profile from "../img/profile.jpg";
import "../CSS/Landing.css";
// import codeSandBox from "../img/CodeSandBox.png";

class Landing extends Component {
  render() {
    return (
      <div
        style={{ width: "100%", margin: "auto" }}
        className="Landing-container"
      >
        <Grid className="Landing-grid">
          <Cell col={12} phone={12} tablet={12} className="Landing-SlideDown">
            <div className="Landing-phone-profile">
              <img src={profile} alt="profile" />
            </div>
            <LandingPlayground />
            <div className="Landing-banner-text">
              <h3>Hi, this is Roy. Nice to meet you.</h3>
              <h4>Front / Back - End Developer</h4>
              <hr />
              {/* <p>JavaScript | React | Python | Golang | Solidity</p> */}
              <p>
                <span className="Landing-javascript">JavaScript</span> |{" "}
                <span className="Landing-react">React</span> |{" "}
                <span className="Landing-python">Python</span> |{" "}
                <span className="Landing-golang">Golang</span> |{" "}
                <span className="Landing-solidity">Solidity</span>
              </p>
              <div className="Landing-social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shoe-kure-2271ab90/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/roy1210"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                {/* CodeSandBox */}
                <a
                  href="https://codesandbox.io/u/roy1210/sandboxes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {/* <img src={codeSandBox} alt="CodeSandBox" /> */}
                  <i className="fab fas fa-cube" aria-hidden="true" />
                </a>
                {/* CodeSandBox
                <a
                  href="https://codesandbox.io/u/roy1210/sandboxes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-codepen" aria-hidden="true" />
                </a> */}
              </div>
            </div>
            <div className="LandingFooter">
              <small>© {new Date().getFullYear()} Shoe Kure</small>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
