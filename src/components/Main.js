import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

// no need class for `stateless`
// exact pass for default page
// can omit `const Main = () => { return () } ` as `const Main =() => ( <Switch></Switch> ); `

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
