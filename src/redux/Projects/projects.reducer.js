// React
import PortfolioScreenshot from "../../img/ReactProjects/190713ScreenShot.jpg";
import FlipCoinScreenshot from "../../img/ReactProjects/190714FlipCoin.gif";
import BlockchainScreenshot from "../../img/ReactProjects/190723Blockchain-JS.jpg";
import FindGIFScreenshot from "../../img/ReactProjects/190714FindGif.jpg";
import DashAwesomeScreenshot from "../../img/ReactProjects/190713DashAwesome.jpg";
import DicesScreenshot from "../../img/ReactProjects/190713Dices.jpg";
import reactHocksCounterScreenshot from "../../img/ReactProjects/190902hockReducer.jpg";
import CounterScreenshot from "../../img/ReactProjects/190713Counter.jpg";
import EcommerceScreenshot from "../../img/ReactProjects/190811EcommerceShop.jpg";
import RobofriendsScreenshot from "../../img/ReactProjects/190912Robofriends.jpg";
import NetflixScreenshot from "../../img/ReactProjects/191130Netflix.jpg";
// TS
import TsMapsScreenshot from "../../img/TypeScriptProjects/190826ts-map.jpg";
import TodoScreenshot from "../../img/TypeScriptProjects/190901Todo.jpg";
// dApps
import MarketplaceScreenshot from "../../img/DappsProjects/190808Marketplace.jpg";
// Vue
import MyMarkdownMemoScreenshot from "../../img/VueProjects/190713MyMarkdownMemo.jpg";
import VsMonsterScreenshot from "../../img/VueProjects/190713VsMonster.jpg";
// Golang
import GolangBlockchainScreenshot from "../../img/GolangProjects/190713Blockchain.jpg";
import HttpStatusChecerScreenshot from "../../img/GolangProjects/190713HttpStatusChecer.jpg";
import DigitalClockScreenshot from "../../img/GolangProjects/190717DigitalClock.gif";
// Others
import MovieHomesScreenshot from "../../img/OtherProjects/191128MovieHomes.jpg";

const PROJECTS_DATA = {
  reactProjects: [
    {
      photoUrl: PortfolioScreenshot,
      name: "Portfolio",
      detail1:
        "Personal portfolio built with React. Registered custom domain on Freenom and hosted on Netlify.",
      detail2: "App works as PWA and run with docker compose.",
      detail3:
        "Tools: CRA, Docker, CircleCI, Redux, Reselect, React Router v5, React helmet, Enzyme, Redux DevTools, Semantic-UI, Material Lite UI",
      github: "https://github.com/roy1210/react-portfolio",
      codesandbox: "https://codesandbox.io/s/my-portfolio-f8t6o",
      siteUrl: "https://roy-k.tk/"
    },
    {
      photoUrl: EcommerceScreenshot,
      name: "eCommerce shop",
      detail1: "(WIP) eCommerce clothing shop",
      detail2:
        "Tools: CRA, SCSS, React Router v5, Firebase, Firestore, Reselect, Redux(logger, persist), React-stripe-checkout",
      github: "https://github.com/roy1210/react-ecommerce-clothing",
      codesandbox: "https://codesandbox.io/s/react-ecommerce-clothing-lkvr8",
      cardColor: "#FFE9D1",
      siteUrl: "https://crwn-live-k.herokuapp.com/"
    },
    {
      photoUrl: NetflixScreenshot,
      name: "Netflix",
      detail1: "Clone the landing page of Netflix",
      detail2:
        "Tools: CRA, React-icons-kit, React Router v5, Styled-components",
      github: "https://github.com/roy1210/react-netflix",
      // codesandbox: "https://codesandbox.io/s/flip-coin-6mu0b",
      siteUrl: "https://netflix-k.netlify.com/",
      titleColor: "whitesmoke"
    },
    {
      photoUrl:
        "https://github.com/roy1210/react-saga-search-giphy/raw/master/src/resource/200101searchGifSaga.gif",
      name: "Search GIF with Saga",
      detail1: "look a GIF with Giphy search engine.",
      detail2:
        "Tools: CRA, Redux-saga, Immutable, Axios, Styled-components, React-spring",
      github: "https://github.com/roy1210/react-saga-search-giphy",
      codesandbox: "https://codesandbox.io/s/kind-bohr-dqhsz",
      siteUrl: "https://look-gif-with-reduxsaga-k.netlify.com",
      titleColor: "blue"
    },
    {
      photoUrl: FlipCoinScreenshot,
      name: "Flip coin",
      detail1: "A mini-game guessing which coin shows up. App works as PWA.",
      detail2: "Tools: CRA",
      github: "https://github.com/roy1210/react-flip-coin",
      codesandbox: "https://codesandbox.io/s/flip-coin-6mu0b",
      siteUrl: "https://coin-game-k.netlify.com"
    },
    {
      photoUrl: BlockchainScreenshot,
      name: "Blockchain",
      detail1:
        "A blockchain working with wallet, transaction and P2P functions.",
      detail2:
        "Tools: Jest, Express, Redis, Postman, Hex-to-binary, Secp256k1 elliptic",
      detail3:
        "Live: if( showing`Not Found`) => Reflesh the page 1min later again.",
      github: "https://github.com/roy1210/react-blockchain",
      siteUrl: "https://my-crypto-blockchain.herokuapp.com/",
      peeredUrl: "https://my-crypto-blockchain-peer.herokuapp.com/"
    },
    {
      photoUrl: RobofriendsScreenshot,
      name: "Robofriends",
      detail1:
        "Generate unique image of robot/alien/monster according registered name and fetch with redux action. App works as PWA.",
      detail2:
        "Tools: Robohash API, JSONPlaceholder, Redux-thunk, Redux-logger, Enzyme, Tachyons, Gh-pages, CircleCI",
      github: "https://github.com/roy1210/react-robofriends",
      codesandbox: "https://codesandbox.io/s/robofriends-gcv9f",
      siteUrl: "https://roy1210.github.io/react-robofriends/",
      titleColor: "red"
    },
    {
      photoUrl: DashAwesomeScreenshot,
      name: "DashAwesome",
      detail1:
        "Simple project dashboard tool with authentication and cloud functions.",
      detail2:
        "Tools: CRA, React Router v5, Redux-thunk, Firebase, Cloud Firestore",
      github: "https://github.com/roy1210/react-dash-awesome",
      siteUrl: "https://dashawesome-1210.firebaseapp.com/",
      cardColor: "#FFE9D1",
      textColor: "black"
    },
    {
      photoUrl: FindGIFScreenshot,
      name: "Find GIF",
      detail1: "Search GIF app.",
      detail2: "Tools: Giphy API, Axios",
      github: "https://github.com/roy1210/React_Find_Gif",
      codesandbox: "https://codesandbox.io/s/github/roy1210/React_Find_Gif",
      siteUrl: "https://csb-gp67w.netlify.com/"
    },
    {
      photoUrl: reactHocksCounterScreenshot,
      name: "Hocks counter",
      detail1:
        "Try the taste of react hocks and reducer with simple counter app.",
      detail2: "Tools: CRA, React hocks",
      github: "https://github.com/roy1210/react-hocks-reducer-counter",
      codesandbox: "https://codesandbox.io/s/reacthocks-reducer-counter-ohixg",
      siteUrl: "https://csb-ohixg.netlify.com/",
      titleColor: "SteelBlue",
      cardColor: "whitesmoke"
    },
    {
      photoUrl: DicesScreenshot,
      name: "Roll dices",
      detail1: "Material component for rolling dice.",
      detail2: "Tools: CRA",
      github: "https://github.com/roy1210/react-roll-dice",
      codesandbox: "https://codesandbox.io/s/dice-xjrei",
      siteUrl: "https://rolling-dice-k.netlify.com",
      titleColor: "SteelBlue",
      cardColor: "whitesmoke"
    },
    {
      photoUrl: CounterScreenshot,
      name: "Counter",
      detail1: "Material component for counting QTY.",
      detail2: "Tools: CRA",
      github: "https://github.com/roy1210/react-counter",
      codesandbox: "https://codesandbox.io/s/counter-app-7b018",
      siteUrl: "https://csb-7b018.netlify.com/",
      titleColor: "SteelBlue",
      cardColor: "whitesmoke"
    }
  ],
  typescriptProjects: [
    {
      photoUrl: TsMapsScreenshot,
      name: "Random map",
      detail1:
        "Randomly generate user and company, and then show both locations on google map.",
      detail2: "Tools: TypeScript,Ts-node, Parcel, Faker, Maps JavaScript API",
      github: "https://github.com/roy1210/random-map",
      titleColor: "black"
    },
    {
      photoUrl: TodoScreenshot,
      detail1: "Simple todo list build with React, React hocks and TypeScript.",
      detail2: "Tools: CRA, TypeScript,React hocks",
      github: "https://github.com/roy1210/react-ts-todo-list",
      codesandbox: "https://codesandbox.io/s/react-ts-todo-list-84xj8",
      siteUrl: "https://todo-react-typescript-k.netlify.com/"
    }
  ],
  dappsProjects: [
    {
      photoUrl: MarketplaceScreenshot,
      name: "Marketplace",
      detail1: "Marketplace dApps. Be able to make transaction by Ether.",
      detail2: "Tools: React, Web3, Truffle, Chai",
      detail3: "Live: Choose the `Kovan` networks in Metamask",
      github: "https://github.com/roy1210/react-dapp-marketplace",
      siteUrl: "https://marketplace-dapp-k.netlify.com",
      titleColor: "black"
    }
  ],
  vueProjects: [
    {
      photoUrl: VsMonsterScreenshot,
      name: "VS Monster",
      detail1: "Game for beat the monster.",
      github: "https://github.com/roy1210/JS_Vue_VS_Monster",
      siteUrl: "https://roy1210.github.io/vue-vs-monster/",
      titleColor: "black"
    },
    {
      photoUrl: MyMarkdownMemoScreenshot,
      name: "Markdown memo",
      detail1: "Markdown memo which can preview and edit on the same time.",
      detail2: "Tools: Firebase authentication, Firebase realtime DB, marked",
      github: "https://github.com/roy1210/JS_Vue_My_Markdown_Memo",
      siteUrl: "https://my-markdown-memo.firebaseapp.com",
      titleColor: "black",
      cardColor: "#FFE9D1",
      textColor: "black"
    }
  ],
  golangProjects: [
    {
      photoUrl: GolangBlockchainScreenshot,
      name: "Blockchain",
      detail1: "Making Blockchain with POW system.",
      github: "https://github.com/roy1210/Golang_Blockchain"
    },
    {
      photoUrl: DigitalClockScreenshot,
      name: "Digital clock",
      detail1: "A digital clock which runs in the terminal.",
      github: "https://github.com/roy1210/Golang_Digital_Clock"
    },
    {
      photoUrl: HttpStatusChecerScreenshot,
      name: "HTTP status checker",
      detail1:
        "Check the current status of the website. Able to detect if the website is downed due to HTTP request returns 404.",
      github: "https://github.com/roy1210/Golang_Http_Status_checker"
    }
  ],
  othersProjects: [
    {
      photoUrl: MovieHomesScreenshot,
      name: "Flexbox: Movies home",
      detail1: "Practice for flexbox",
      detail2: "Tools: HTML, Flexbox, Lightbox",
      github: "https://github.com/roy1210/flexbox-movies-home",
      siteUrl: "https://roy1210.github.io/flexbox-movies-home/",
      titleColor: "black",
      textColor: "black"
    }
  ]
};

const projectsReducer = (state = PROJECTS_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
