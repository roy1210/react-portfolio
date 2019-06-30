import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ReactProjects from "./ReactProjects.js";
import VueProjects from "./VueProjects.js";
import GolangProjects from "./GolangProjects.js";
import DjangoProjects from "./DjangoProjects.js";
import AppFooter from "../AppFooter";
import "../../CSS/Projects.css";

class ProjectsPage extends Component {
  componentDidMount() {
    document.title = "Roy | Projects";
  }
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  // Each Tab got unique tab key (index) by default by react-mdl
  render() {
    return (
      <div className="Projects">
        <div className="Projects-category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab className="Projects-fade-in one">React</Tab>
            <Tab className="Projects-fade-in two">Vue</Tab>
            <Tab className="Projects-fade-in three">Golang</Tab>
            <Tab className="Projects-fade-in four">Django</Tab>
            {/* <Tab>Solidity</Tab> */}
          </Tabs>

          <Grid>
            <Cell col={12} phone={12} tablet={12} className="Projects-Project">
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
        <div className="Projects-footer">
          <AppFooter />
        </div>
      </div>
    );
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <ReactProjects />;
    } else if (this.state.activeTab === 1) {
      return <VueProjects />;
    } else if (this.state.activeTab === 2) {
      return <GolangProjects />;
    } else if (this.state.activeTab === 3) {
      return <DjangoProjects />;
    }
  }
}

export default ProjectsPage;
