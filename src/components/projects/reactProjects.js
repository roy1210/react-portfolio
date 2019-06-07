import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
import Barcerona from "../../img/Barcelona.jpg";

class ReactProjects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Grid>
          <Cell col={4} phone={12}>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/React_PF/portfolio.jpg?raw=true) center / cover "
                }}
              >
                Portfolio
              </CardTitle>
              <CardText>
                This SAP portfolio website.
                <br />
                Made by React Router and React-MDL
              </CardText>
              <CardActions border>
                <Button colored>
                  {" "}
                  <a
                    href="https://github.com/roy1210/JS_React_Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>{" "}
                </Button>
                <Button colored>Go</Button>
              </CardActions>
            </Card>
          </Cell>

          {/* Project2  */}
          <Cell col={4} offset={4} phone={12}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "150px",
                  background:
                    "url(https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/React_PF/GifMessi2-compressor.gif?raw=true) center / cover "
                }}
              >
                GIF Search
              </CardTitle>
              <CardText>
                SAP which simply search GIF by using GIPHY API.
              </CardText>
              <CardActions border>
                <Button colored>
                  {" "}
                  <a
                    href="https://github.com/roy1210/React_Find_Gif/tree/master/"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  {" "}
                  <a
                    href="https://codesandbox.io/s/vj982kvj1l"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                  >
                    CodeSandBox
                  </a>
                </Button>
                <Button colored>
                  {" "}
                  <a
                    href="https://csb-vj982kvj1l.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // style="none"
                  >
                    Go
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReactProjects;
