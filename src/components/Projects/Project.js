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
        <a
          href={this.props.codesandbox}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button style={{ color: "#ff4081" }}>CodeSandBox</Button>
        </a>
      );
    } else {
      codesandbox = "";
    }

    let siteUrl;
    if (this.props.siteUrl) {
      siteUrl = (
        <a href={this.props.siteUrl} target="_blank" rel="noopener noreferrer">
          <Button style={{ color: "#ff4081" }}>Go</Button>
        </a>
      );
    } else {
      siteUrl = "";
    }

    let cardColor;
    if (this.props.cardColor) {
      cardColor = this.props.cardColor;
    } else {
      cardColor = "white";
    }

    let textColor;
    if (this.props.textColor) {
      textColor = this.props.textColor;
    } else {
      textColor = "rgba(0,0,0,.54)";
    }

    return (
      <div className="Project-SlideDown">
        <Card
          shadow={5}
          style={{
            width: "307px",
            display: "block",
            margin: "auto",
            background: `${cardColor}`
          }}
        >
          <CardTitle
            style={{
              color: `${titleColor}`,
              height: "176px",
              background: `url(${this.props.photoUrl}) center / cover `
            }}
          >
            {this.props.name}
          </CardTitle>
          <CardText style={{ color: `${textColor}` }}>
            {this.props.detail1}
            {detail2}
          </CardText>
          <CardActions border>
            <a
              href={this.props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={{ color: "#ff4081" }}>Github</Button>
            </a>
            {codesandbox}
            {siteUrl}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Project;
