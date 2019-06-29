import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import PageNotFound from "./PageNotFound";

// no need class for `stateless`
// const Main =() => ( <Switch></Switch> ); same as () => { return ()}
// アロー関数の { return( ) };を省略している書き方。
const RoutePage = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route component={PageNotFound} />
  </Switch>
);

export default RoutePage;
