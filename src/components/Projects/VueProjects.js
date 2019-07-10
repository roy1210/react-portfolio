import React from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";

const VueProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/Vue_VS_Monster/raw/master/vsmonster.jpg"
        name="VS Monster"
        detail1="Game for beat the monster."
        github="https://github.com/roy1210/JS_Vue_VS_Monster"
        siteUrl="https://roy1210.github.io/JS_Vue_VS_Monster/"
        titleColor="black"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/JS_Vue_My_Markdown_Memo/raw/master/mymarkdown.jpg"
        name="Markdown Memo"
        detail1="Markdown memo which can preview and edit on the same time."
        detail2="Tools: Firebase authentication, Firebase realtime DB, marked"
        github="https://github.com/roy1210/JS_Vue_My_Markdown_Memo"
        siteUrl="https://my-markdown-memo.firebaseapp.com"
        titleColor="black"
        cardColor="#FFE9D1"
        textColor="black"
      />
    </Cell>
  </Grid>
);

export default VueProjects;
