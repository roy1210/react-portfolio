// React
import PortfolioScreenshot from '../../img/ReactProjects/190713ScreenShot.jpg';
import FlipCoinScreenshot from '../../img/ReactProjects/190714FlipCoin.gif';
import BlockchainScreenshot from '../../img/ReactProjects/190723Blockchain-JS.jpg';
import FindGIFScreenshot from '../../img/ReactProjects/190714FindGif.jpg';
import DashAwesomeScreenshot from '../../img/ReactProjects/190713DashAwesome.jpg';
import DicesScreenshot from '../../img/ReactProjects/190713Dices.jpg';
import CounterScreenshot from '../../img/ReactProjects/190713Counter.jpg';
import EcommerceScreenshot from '../../img/ReactProjects/190811EcommerceShop.jpg';
// dApps
import MarketplaceScreenshot from '../../img/DappsProjects/190808Marketplace.jpg';
// Vue
import MyMarkdownMemoScreenshot from '../../img/VueProjects/190713MyMarkdownMemo.jpg';
import VsMonsterScreenshot from '../../img/VueProjects/190713VsMonster.jpg';
// Golang
import GolangBlockchainScreenshot from '../../img/GolangProjects/190713Blockchain.jpg';
import HttpStatusChecerScreenshot from '../../img/GolangProjects/190713HttpStatusChecer.jpg';
import DigitalClockScreenshot from '../../img/GolangProjects/190717DigitalClock.gif';

const PROJECTS_DATA = {
  reactProjects: [
    {
      photoUrl: PortfolioScreenshot,
      name: 'Portfolio',
      detail1:
        'Personal portfolio built with React. Registered custom domain on Freenom and hosted on Netlify.',
      detail2:
        'Tools: CRA, Redux, Reselect, React Router v5, React helmet, Semantic-UI, Material Lite UI',
      github: 'https://github.com/roy1210/react-portfolio',
      codesandbox: 'https://codesandbox.io/s/my-portfolio-5322o',
      siteUrl: 'https://roy-k.tk/'
    },
    {
      photoUrl: EcommerceScreenshot,
      name: 'eCommerce Shop',
      detail1: '(WIP) eCommerce clothing shop',
      detail2:
        'Tools: CRA, SCSS, React Router v5, Firebase, Firestore, Reselect, Redux(logger, persist)',
      github: 'https://github.com/roy1210/react-ecommerce-clothing',
      cardColor: '#FFE9D1'
    },
    {
      photoUrl: FlipCoinScreenshot,
      name: 'Flip coin',
      detail1: 'A mini-game guessing which coin shows up.',
      detail2: 'Tools: CRA',
      github: 'https://github.com/roy1210/react-flip-coin',
      codesandbox: 'https://codesandbox.io/s/flip-coin-6mu0b',
      siteUrl: 'https://coin-game-k.netlify.com'
    },
    {
      photoUrl: BlockchainScreenshot,
      name: 'Blockchain',
      detail1:
        'A blockchain working with wallet, transaction and P2P functions.',
      detail2:
        'Tools: Jest, Express, Redis, Postman, Hex-to-binary, Secp256k1 elliptic',
      detail3: 'Live: Reflesh a page 1min later again.',
      github: 'https://github.com/roy1210/react-blockchain',
      siteUrl: 'https://my-crypto-blockchain.herokuapp.com/',
      peeredUrl: 'https://my-crypto-blockchain-peer.herokuapp.com/'
    },
    {
      photoUrl: DashAwesomeScreenshot,
      name: 'DashAwesome',
      detail1:
        'Simple project dashboard tool with authentication and cloud functions.',
      detail2:
        'Tools: CRA, React Router v5, Redux-thunk, Firebase, Cloud Firestore',
      github: 'https://github.com/roy1210/react-dash-awesome',
      siteUrl: 'https://dashawesome-1210.firebaseapp.com/',
      cardColor: '#FFE9D1',
      textColor: 'black'
    },
    {
      photoUrl: FindGIFScreenshot,
      name: 'Find GIF',
      detail1: 'Search GIF app.',
      detail2: 'Tools: Giphy API, Axios',
      github: 'https://github.com/roy1210/React_Find_Gif',
      codesandbox: 'https://codesandbox.io/s/github/roy1210/React_Find_Gif',
      siteUrl: 'https://csb-gp67w.netlify.com/'
    },
    {
      photoUrl: DicesScreenshot,
      name: 'Roll dices',
      detail1: 'Material component for rolling dice.',
      detail2: 'Tools: CRA',
      github: 'https://github.com/roy1210/react-roll-dice',
      codesandbox: 'https://codesandbox.io/s/dice-xjrei',
      siteUrl: 'https://rolling-dice-k.netlify.com',
      titleColor: 'SteelBlue',
      cardColor: 'whitesmoke'
    },
    {
      photoUrl: CounterScreenshot,
      name: 'Counter',
      detail1: 'Material component for counting QTY.',
      detail2: 'Tools: CRA',
      github: 'https://github.com/roy1210/react-counter',
      codesandbox: 'https://codesandbox.io/s/counter-app-7b018',
      siteUrl: 'https://csb-7b018.netlify.com/',
      titleColor: 'SteelBlue',
      cardColor: 'whitesmoke'
    }
  ],
  dappsProjects: [
    {
      photoUrl: MarketplaceScreenshot,
      name: 'Marketplace',
      detail1: 'Marketplace dApps. Be able to make transaction by Ether.',
      detail2: 'Tools: React, Web3, Truffle, Chai',
      detail3: 'Live: Choose the `Kovan` networks in Metamask',
      github: 'https://github.com/roy1210/react-dapp-marketplace',
      siteUrl: 'https://marketplace-dapp-k.netlify.com',
      titleColor: 'black'
    }
  ],
  vueProjects: [
    {
      photoUrl: VsMonsterScreenshot,
      name: 'VS Monster',
      detail1: 'Game for beat the monster.',
      github: 'https://github.com/roy1210/JS_Vue_VS_Monster',
      siteUrl: 'https://roy1210.github.io/vue-vs-monster/',
      titleColor: 'black'
    },
    {
      photoUrl: MyMarkdownMemoScreenshot,
      name: 'Markdown Memo',
      detail1: 'Markdown memo which can preview and edit on the same time.',
      detail2: 'Tools: Firebase authentication, Firebase realtime DB, marked',
      github: 'https://github.com/roy1210/JS_Vue_My_Markdown_Memo',
      siteUrl: 'https://my-markdown-memo.firebaseapp.com',
      titleColor: 'black',
      cardColor: '#FFE9D1',
      textColor: 'black'
    }
  ],
  golangProjects: [
    {
      photoUrl: GolangBlockchainScreenshot,
      name: 'Blockchain',
      detail1: 'Making Blockchain with POW system.',
      github: 'https://github.com/roy1210/Golang_Blockchain'
    },
    {
      photoUrl: DigitalClockScreenshot,
      name: 'Digital clock',
      detail1: 'A digital clock which runs in the terminal.',
      github: 'https://github.com/roy1210/Golang_Digital_Clock'
    },
    {
      photoUrl: HttpStatusChecerScreenshot,
      name: 'HTTP status checker',
      detail1:
        'Check the current status of the website. Able to detect if the website is downed due to HTTP request returns 404.',
      github: 'https://github.com/roy1210/Golang_Http_Status_checker'
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
