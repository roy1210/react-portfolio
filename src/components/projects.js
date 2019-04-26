import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ReactProjects from "./projects/reactProjects.js";
import VueProjects from "./projects/vueProjects.js";
import GolangProjects from "./projects/golangProjects.js";
import PythonProjects from "./projects/pythonProjects.js";
import SolidityProjects from "./projects/solidityProjects.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // Each Tab got unique tab key (index) by default by react-mdl
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>Golang</Tab>
          <Tab>Python</Tab>
          <Tab>Solidity</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
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
      return <PythonProjects />;
    } else if (this.state.activeTab === 4) {
      return <SolidityProjects />;
    }
  }
}

export default Projects;
