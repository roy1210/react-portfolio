import React from "react";
import { Grid, Cell } from "react-mdl";
import Project from "./Project";
import PortfolioScreenshot from "../../img/ReactProjects/190713ScreenShot.jpg";
import FlipCoinScreenshot from "../../img/ReactProjects/190714FlipCoin.gif";
import BlockchainScreenshot from "../../img/ReactProjects/190723Blockchain-JS.jpg";
import FindGIFScreenshot from "../../img/ReactProjects/190714FindGif.jpg";
import DashAwesomeScreenshot from "../../img/ReactProjects/190713DashAwesome.jpg";
import DicesScreenshot from "../../img/ReactProjects/190713Dices.jpg";
import CounterScreenshot from "../../img/ReactProjects/190713Counter.jpg";

const ReactProjects = () => (
  <Grid className="projects-grid">
    <Cell col={4} phone={12}>
      <Project
        photoUrl={PortfolioScreenshot}
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
        photoUrl={FlipCoinScreenshot}
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
        photoUrl={BlockchainScreenshot}
        name="Blockchain"
        detail1="A blockchain working with wallet and transaction functions (WIP)"
        detail2="Tools: JavaScript, Jest, Express, PubNup, Postman"
        github="https://github.com/roy1210/react-blockchain"
      />
    </Cell>

    <Cell col={4} phone={12}>
      <Project
        photoUrl={DashAwesomeScreenshot}
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
        photoUrl={FindGIFScreenshot}
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
        photoUrl={DicesScreenshot}
        name="Roll dices"
        detail1="Material component for rolling dice."
        detail2="Tools: CRA"
        github="https://github.com/roy1210/react-roll-dice"
        codesandbox="https://codesandbox.io/s/dice-xjrei"
        siteUrl="https://rolling-dice-k.netlify.com"
        titleColor="SteelBlue"
        cardColor="whitesmoke"
      />
    </Cell>
    <Cell col={4} phone={12}>
      <Project
        photoUrl={CounterScreenshot}
        name="Counter"
        detail1="Material component for counting QTY."
        detail2="Tools: CRA"
        github="https://github.com/roy1210/react-counter"
        codesandbox="https://codesandbox.io/s/counter-app-7b018"
        siteUrl="https://csb-7b018.netlify.com/"
        titleColor="SteelBlue"
        cardColor="whitesmoke"
      />
    </Cell>
  </Grid>
);

export default ReactProjects;
