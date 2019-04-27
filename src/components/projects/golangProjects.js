import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class GolangProjects extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://github.com/roy1210/Golang_Blockchain/raw/master/GoBlockchain.jpg) center / cover "
            }}
          >
            Blockchain
          </CardTitle>
          <CardText>
            <br />
            Make Blockchain with POW system.
            <br />
            <br />
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                href="https://github.com/roy1210/Golang_Blockchain"
                target="_blank"
                rel="noopener noreferrer"
              />{" "}
              Github
            </Button>
          </CardActions>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "340px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://github.com/roy1210/Golang_Digital_Clock/raw/master/clock.gif) center / cover "
            }}
          >
            Digital clock
          </CardTitle>
          <CardText>
            <br />
            Digital clock which run in the terminal.
            <br />
            <br />
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                href="https://github.com/roy1210/Golang_Digital_Clock"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
        {/* Project3  */}
        <Card shadow={5} style={{ minWidth: "340px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://github.com/roy1210/Golang_Http_Status_checker/raw/master/checker.jpg) center / cover "
            }}
          >
            HTTP status checker
          </CardTitle>
          <CardText>
            Check the current status of website. Able to detect if website is
            downed due to http request returns 404.
          </CardText>
          <CardActions border>
            <Button colored>
              {" "}
              <a
                href="https://github.com/roy1210/Golang_Http_Status_checker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default GolangProjects;
