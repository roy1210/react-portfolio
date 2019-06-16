import React, { Component } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Popup, Icon } from "semantic-ui-react";
import "../CSS/App.css";

class NavigationLayout extends Component {
  render() {
    const miniPlayground = () => (
      <Popup
        trigger={<Icon name="js" color="yellow" size="large" circular />}
        content="Hidden game is somewhere in landing page, try to find it!"
        position="bottom right"
      />
    );
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Roy
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume / Contact</Link>
              <Link to="/projects">Projects</Link>
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
              <Link to="/resume">Resume / Contact</Link>
              <Link to="/projects">Projects</Link>
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

export default NavigationLayout;
