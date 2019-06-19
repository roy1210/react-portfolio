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
              photoUrl="https://github.com/roy1210/JS_React_Portfolio/blob/master/src/img/190616-Portfolio.jpg?raw=true"
              name="Portfolio"
              detail1="This portfolio website."
              detail2="Created with React Router, Semantic-ui-react, and React-MDL."
              github="https://github.com/roy1210/JS_React_Portfolio"
              codesandbox="https://codesandbox.io/s/my-portfolio-mjewd"
              siteUrl="https://roy-k.tk/"
            />
          </Cell>

          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/react-flip-coin/blob/master/src/screenshot.gif?raw=true"
              name="Flip coin"
              detail1="A mini-game guessing which coin shows up"
              github="https://github.com/roy1210/react-flip-coin"
              codesandbox="https://codesandbox.io/s/flip-coin-6mu0b"
              siteUrl="https://coin-game-k.netlify.com"
              titleColor="black"
            />
          </Cell>

          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/React_Find_Gif/blob/master/src/screen-shot.gif?raw=true"
              name="Find GIF"
              detail1="Search for GIF using GIPHY API."
              github="https://github.com/roy1210/React_Find_Gif"
              codesandbox="https://codesandbox.io/s/github/roy1210/React_Find_Gif"
              siteUrl="https://csb-gp67w.netlify.com/"
            />
          </Cell>

          <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/react-roll-dice/blob/master/screenShot.jpg?raw=true"
              name="Roll dice"
              detail1="Component for rolling dice"
              github="https://github.com/roy1210/react-roll-dice"
              codesandbox="https://codesandbox.io/s/dice-xjrei"
              siteUrl="https://rolling-dice-k.netlify.com"
              titleColor="black"
            />
          </Cell>

          {/* <Cell col={4} phone={12}>
            <Project
              photoUrl="https://github.com/roy1210/JS_React_Pokemon-Cards/blob/master/src/Poke-cards.jpg?raw=true"
              name="Pokemon cards"
              detail1='Showing "Winning hand" or "Losing hand" for each side of deck.'
              github="https://github.com/roy1210/JS_React_Pokemon-Cards"
              codesandbox="https://codesandbox.io/s/pokemons-cfei1"
              siteUrl="https://poke-cards-roy1210.netlify.com/"
              titleColor="black"
            />
          </Cell> */}
        </Grid>
      </div>
    );
  }
}

export default ReactProjects;
