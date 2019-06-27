import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./project";

class VueProjects extends Component {
  render() {
    return (
      <div>
        <Grid className="projects-grid">
          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/Vue_VS_Monster/raw/master/vsmonster.jpg"
              name="VS Monster"
              detail1="Game: Beat the monster."
              github="https://github.com/roy1210/JS_Vue_VS_Monster"
              siteUrl="https://roy1210.github.io/JS_Vue_VS_Monster/"
              titleColor="black"
            />
          </Cell>
          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/JS_Vue_My_Markdown_Memo/raw/master/mymarkdown.jpg"
              name="Markdown Memo"
              detail1="Markdown memo which can preview and edit on same time. (Like Evernote)"
              detail2="Login with Google account and DB in firebase realtime DB."
              github="https://github.com/roy1210/JS_Vue_My_Markdown_Memo"
              codesandbox="https://codesandbox.io/s/mymarkdown-s0etj"
              siteUrl="https://my-markdown-memo.firebaseapp.com"
              titleColor="black"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default VueProjects;
