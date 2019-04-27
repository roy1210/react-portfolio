import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class ReactProjects extends Component {
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
                "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover "
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
            <Button colored>CodeSandBox</Button>
            <Button colored>Webpage</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover "
            }}
          >
            Youtube player
          </CardTitle>
          <CardText>
            SAP which simply search and play videos in Youtube by using Google
            API.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodeSandBox</Button>
            <Button colored>Webpage</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project  */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "150px",
              background:
                "url(https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/Findgifmessi.gif?raw=true) center / cover "
            }}
          >
            GIF Search
          </CardTitle>
          <CardText>SAP which simply search GIF by using GIPHY API.</CardText>
          <CardActions border>
            <Button colored> Github</Button>
            <Button colored>
              {" "}
              <a
                href="https://codesandbox.io/s/vj982kvj1l"
                target="_blank"
                rel="noopener noreferrer"
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
                Sample
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default ReactProjects;
