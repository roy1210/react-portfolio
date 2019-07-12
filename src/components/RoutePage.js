import React from "react";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import LandingPage from "./LandingPage/LandingPage";
import ProjectsPage from "./Projects/ProjectsPage";
import ResumePage from "./Resume/ResumePage";
import PageNotFound from "./PageNotFound/PageNotFound";

const RouteWithTitle = ({ title, ...props }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Route {...props} />
  </>
);

// no need class for `stateless`
// const Main =() => ( <Switch></Switch> ); same as () => { return ()}
// アロー関数の { return( ) };を省略している書き方。
const RoutePage = () => (
  <Switch>
    <RouteWithTitle title="Roy" exact path="/" component={LandingPage} />
    <RouteWithTitle
      title="Roy | Projects"
      exact
      path="/projects"
      component={ProjectsPage}
    />
    <RouteWithTitle
      title="Roy | Resume"
      exact
      path="/resume"
      component={ResumePage}
    />
    <RouteWithTitle title="Roy | 404" component={PageNotFound} />
  </Switch>
);

export default RoutePage;
