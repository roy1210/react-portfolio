import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import MyMarkdownMemoScreenshot from "../../img/VueProjects/190713MyMarkdownMemo.jpg";
import VsMonsterScreenshot from "../../img/VueProjects/190713VsMonster.jpg";

class VueProjects extends Component {
  static defaultProps = {
    projects: [
      {
        id: 1,
        photoUrl: VsMonsterScreenshot,
        name: "VS Monster",
        detail1: "Game for beat the monster.",
        github: "https://github.com/roy1210/JS_Vue_VS_Monster",
        siteUrl: "https://roy1210.github.io/vue-vs-monster/",
        titleColor: "black"
      },
      {
        id: 2,
        photoUrl: MyMarkdownMemoScreenshot,
        name: "Markdown Memo",
        detail1: "Markdown memo which can preview and edit on the same time.",
        detail2: "Tools: Firebase authentication, Firebase realtime DB, marked",
        github: "https://github.com/roy1210/JS_Vue_My_Markdown_Memo",
        siteUrl: "https://my-markdown-memo.firebaseapp.com",
        titleColor: "black",
        cardColor: "#FFE9D1",
        textColor: "black"
      }
    ]
  };
  render() {
    return (
      <Grid className="projects-grid">
        {this.props.projects.map(props => (
          <Cell col={4} phone={12}>
            <Project
              key={props.id}
              photoUrl={props.photoUrl}
              name={props.name}
              detail1={props.detail1}
              detail2={props.detail2}
              detail3={props.detail3}
              github={props.github}
              siteUrl={props.siteUrl}
              codesandbox={props.codesandbox}
              titleColor={props.titleColor}
              cardColor={props.cardColor}
              textcolor={props.textColor}
              peeredUrl={props.peeredUrl}
            />
          </Cell>
        ))}
      </Grid>
    );
  }
}

export default VueProjects;
