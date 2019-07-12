import React from "react";
import { Link } from "react-router-dom";
import RoutePage from "./RoutePage";
import { Layout, Header, Navigation, Drawer, Content, Button } from "react-mdl";
import { Popup, Icon } from "semantic-ui-react";
import "../CSS/App.css";

const miniPlayground = () => (
  <Popup
    trigger={<Icon name="js" color="yellow" size="large" circular />}
    content="Hidden game is somewhere in landing page, try to find it!"
    position="bottom right"
  />
);
const resume = () => (
  <Popup
    trigger={<Icon name="file pdf" color="red" size="large" circular />}
    content="It's my resume(pdf)"
    position="bottom right"
    style={{ padding: "0px" }}
  />
);

const NavigationLayout = () => (
  <div className="demo-big-content">
    <Layout>
      <Header
        // waterfall
        // style={{ position: "fixed", opacity: "0.95" }}
        className="header-color"
        title={
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Roy
          </Link>
        }
        scroll
      >
        <Navigation>
          <Link to="/resume">
            <Button
              style={{ color: "white" }}
              className="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              RESUME / CONTACT
            </Button>
          </Link>
          <Link to="/projects">
            <Button
              style={{ color: "white" }}
              className="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              PROJECTS
            </Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1nXgDroS8Q5iXP7B6xGf9zKVvG28kcZXR/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
          >
            {resume()}
          </a>
          <Link to="/">{miniPlayground()}</Link>
        </Navigation>
      </Header>
      <Drawer
        title={
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Roy
          </Link>
        }
      >
        <Navigation>
          <Link to="/resume">RESUME / CONTACT</Link>
          <Link to="/projects">PROJECTS</Link>
          <p style={{ textDecoration: "none", color: "black" }}>
            External links:
          </p>
          <a
            href="https://github.com/roy1210"
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roy1210/"
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1nXgDroS8Q5iXP7B6xGf9zKVvG28kcZXR/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
          >
            RESUME(PDF)
          </a>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <RoutePage />
      </Content>
    </Layout>
  </div>
);

export default NavigationLayout;
