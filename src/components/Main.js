import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import PageNotFound from "./PageNotFound";

// no need class for `stateless`
// can omit `const Main = () => { return () } ` as `const Main =() => ( <Switch></Switch> ); `
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/404" component={PageNotFound} />
      <Route component={NoMatch} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Main;
