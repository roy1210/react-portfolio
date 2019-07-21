import React from "react";
import { Link } from "react-router-dom";
import RoutePage from "./RoutePage";
import { Layout, Header, Navigation, Drawer, Content, Button } from "react-mdl";
import { Popup, Icon } from "semantic-ui-react";
import "../CSS/App.css";
import "../CSS/NavigationLayout.css";

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
    content="It's my resume (pdf)"
    position="bottom right"
  />
);

const resumeURL =
  "https://drive.google.com/file/d/1xmCSpfKhxnR2MtAhG4bH3i9Z9zemqGXs/view?usp=sharing";

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
            href={resumeURL}
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
        className="HamburgerMenu"
        title={
          <Link to="/" className="DrawerTitle">
            Roy
          </Link>
        }
      >
        <Navigation>
          <Link to="/resume">RESUME / CONTACT</Link>
          <Link to="/projects">PROJECTS</Link>
          <hr
            style={{ padding: "0px", marginTop: "2em", color: "GhostWhite" }}
          />
          <div className="DrawerTitle">
            <p>External links</p>
          </div>
          <a
            href={resumeURL}
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
          >
            RESUME (PDF)
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
