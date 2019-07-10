import React from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";

const ReactProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/react-portfolio/blob/master/src/img/190710ReactPortfolio.jpg"
        name="Portfolio"
        detail1="Personal portfolio built with React. Registered custom domain on Freenom and hosted on Netlify."
        detail2="Tools: CRA, React Router v5, React helmet, Semantic-UI, Material Lite UI"
        github="https://github.com/roy1210/react-portfolio"
        codesandbox="https://codesandbox.io/s/my-portfolio-l5tuh"
        siteUrl="https://roy-k.tk/"
      />
    </Cell>

    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/react-flip-coin/blob/master/src/img/Screenshot.gif?raw=true"
        name="Flip coin"
        detail1="A mini-game guessing which coin shows up."
        detail2="Tools: CRA"
        github="https://github.com/roy1210/react-flip-coin"
        codesandbox="https://codesandbox.io/s/flip-coin-6mu0b"
        siteUrl="https://coin-game-k.netlify.com"
      />
    </Cell>

    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/react-dash-awesome/blob/master/public/img/ScreenShot.jpg?raw=true"
        name="DashAwesome"
        detail1="Simple project dashboard tool with authentication and cloud functions."
        detail2="Tools: CRA, React Router v5, Redux-thunk, Firebase, Cloud Firestore"
        github="https://github.com/roy1210/react-dash-awesome"
        siteUrl="https://dashawesome-1210.firebaseapp.com/"
        cardColor="#FFE9D1"
        textColor="black"
      />
    </Cell>

    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/React_Find_Gif/blob/master/src/screen-shot.gif?raw=true"
        name="Find GIF"
        detail1="Search GIF app."
        detail2="Tools: Giphy API, Axios"
        github="https://github.com/roy1210/React_Find_Gif"
        codesandbox="https://codesandbox.io/s/github/roy1210/React_Find_Gif"
        siteUrl="https://csb-gp67w.netlify.com/"
      />
    </Cell>

    <Cell col={4} phone={12}>
      <Project
        photoUrl="https://github.com/roy1210/react-roll-dice/blob/master/screenShot.jpg?raw=true"
        name="Roll dice"
        detail1="Material component for rolling dice."
        detail2="Tools: CRA"
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
);

export default ReactProjects;
