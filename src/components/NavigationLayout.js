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
