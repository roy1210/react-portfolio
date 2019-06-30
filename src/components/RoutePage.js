import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import ProjectsPage from "./Projects/ProjectsPage";
import ResumePage from "./Resume/ResumePage";
import PageNotFound from "./PageNotFound";

// no need class for `stateless`
// const Main =() => ( <Switch></Switch> ); same as () => { return ()}
// アロー関数の { return( ) };を省略している書き方。
const RoutePage = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route exact path="/resume" component={ResumePage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default RoutePage;
