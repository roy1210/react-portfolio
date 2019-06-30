import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import "../../CSS/Project.css";

// Preffer to use CLASS because a lot of props
class Project extends Component {
  render() {
    let detail2;
    if (this.props.detail2) {
      detail2 = <div>{this.props.detail2}</div>;
    } else {
      detail2 = "";
    }

    let titleColor;
    if (this.props.titleColor) {
      titleColor = this.props.titleColor;
    } else {
      titleColor = "white";
    }

    let codesandbox;
    if (this.props.codesandbox) {
      codesandbox = (
        <Button colored>
          {" "}
          <a
            href={this.props.codesandbox}
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeSandBox
          </a>
        </Button>
      );
    } else {
      codesandbox = "";
    }

    let siteUrl;
    if (this.props.siteUrl) {
      siteUrl = (
        <Button colored>
          {" "}
          <a
            href={this.props.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </Button>
      );
    } else {
      siteUrl = "";
    }

    return (
      <div className="Project-SlideDown">
        <Card shadow={5} style={{ width: "307px", margin: "auto" }}>
          <CardTitle
            style={{
              color: `${titleColor}`,
              height: "176px",
              background: `url(${this.props.photoUrl}) center / cover `
            }}
          >
            {this.props.name}
          </CardTitle>
          <CardText>
            {this.props.detail1}
            {detail2}
          </CardText>
          <CardActions border>
            <Button colored>
              {" "}
              <a
                href={this.props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
            </Button>
            {codesandbox}
            {siteUrl}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Project;
