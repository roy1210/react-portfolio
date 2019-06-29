import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";

// no need class for `stateless`
// can omit `const Main = () => { return () } ` as `const Main =() => ( <Switch></Switch> ); `
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
