import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./project";

class ReactProjects extends Component {
  render() {
    return (
      <div>
        <Grid className="projects-grid">
          <Cell col={4} phone={12}>
            <Project
              photoUrl=""
              name="Portfolio"
              detail1="This portfolio website."
              detail2="Made by React Router and React-MDL."
              github="https://github.com/roy1210/JS_React_Portfolio"
              codesandbox="https://codesandbox.io/s/my-portfolio-my66x"
              siteUrl="https://roy-k.netlify.com/"
            />
          </Cell>
          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/React_PF/GifMessi2-compressor.gif?raw=true"
              name="Find GIF"
              detail1="Search GIF by using GIPHY API."
              github="https://github.com/roy1210/React_Find_Gif"
              codesandbox="https://codesandbox.io/s/github/roy1210/React_Find_Gif"
              siteUrl="https://csb-vj982kvj1l.netlify.com/"
            />
          </Cell>

          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/React_PF/Poke-cards.jpg?raw=true"
              name="Pokemon cards"
              detail1='Showing "Winning hand" or "Losing hand" for each side of deck.'
              github="https://github.com/roy1210/JS_React_Pokemon-Cards"
              codesandbox="https://codesandbox.io/s/pokemons-cfei1"
              siteUrl="https://poke-cards-roy1210.netlify.com/"
              titleColor="black"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReactProjects;
