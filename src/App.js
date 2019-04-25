import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                BOBL
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">全球主站</Link>
              <Link to="/aboutme">關於BOBL</Link>
              <Link to="/projects">網上銀行</Link>
              <Link to="/contact">客戶服務</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                BOBL
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   return (

//     <div>
//       <h1>Hello World</h1>
//     </div>

//   );
// }

// export default App;
