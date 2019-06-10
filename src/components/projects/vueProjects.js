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

class VueProjects extends Component {
  render() {
    return (
      <div>
        <Grid className="projects-grid">
          <Cell col={4} phone={12}>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://github.com/roy1210/Vue_VS_Monster/raw/master/vsmonster.jpg) center / cover "
                }}
              >
                VS Monster
              </CardTitle>
              <CardText>
                <br />
                Game for beat the monster.
                <br />
                <br />
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/roy1210/JS_Vue_VS_Monster"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="https://roy1210.github.io/JS_Vue_VS_Monster/"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                  >
                    Go
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <br />

          {/* Project2  */}
          <Cell col={4} phone={12}>
            <Card shadow={5} style={{ minWidth: "340px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://github.com/roy1210/JS_Vue_My_Markdown_Memo/raw/master/mymarkdown.jpg) center / cover "
                }}
              >
                Markdown Memo
              </CardTitle>
              <CardText>
                Markdown memo which can preview and edit on same time. (Evernote
                taste)
                <br />
                Login with Google account and DB in firebase realtime DB.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/roy1210/JS_Vue_My_Markdown_Memo"
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
                    href="https://my-markdown-memo.firebaseapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                  >
                    Go
                  </a>{" "}
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default VueProjects;
