import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import LandingPlayground from "./LandingPlayground";
import AppFooter from "../AppFooter";
import LandingIcon from "./LandingIcon";
import profile from "../../img/profile.jpg";
import "../../CSS/Landing.css";

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
              <h3>Hi, this is Roy. Nice to meet you!</h3>
              <h4>Front / Back - End Developer</h4>
              <hr />
              <p>
                <span className="Landing-javascript">JavaScript</span> |{" "}
                <span className="Landing-react">React</span> |{" "}
                <span className="Landing-python">Python</span> |{" "}
                <span className="Landing-golang">Golang</span> |{" "}
                <span className="Landing-solidity">Solidity</span>
              </p>
              <div className="Landing-social-links">
                <LandingIcon
                  url="https://www.linkedin.com/in/shoe-kure-2271ab90/"
                  icon="fab fa-linkedin"
                />
                <LandingIcon
                  url="https://github.com/roy1210"
                  icon="fab fa-github"
                />
                <LandingIcon
                  url="https://codesandbox.io/u/roy1210/sandboxes"
                  icon="fab fas fa-cube"
                />
              </div>
            </div>
            <div className="Landing-marginBottom" />
            <div className="Landing-footer">
              <AppFooter />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
