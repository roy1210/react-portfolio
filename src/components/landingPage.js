import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "../img/profile.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={profile} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1> Blockchain / Web Developer</h1>

              <hr />

              <p>
                Golang | Python | Solidity | JavaScript | React | Vue | HTML/CSS
                | Bootstrap
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
