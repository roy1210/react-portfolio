import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

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
