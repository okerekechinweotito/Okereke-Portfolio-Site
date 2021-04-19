import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../components/home/home.jsx";
import Resume from "../components/resume/resume.jsx";
import Skills from "../components/skills/skills.jsx";
import Projects from "../components/projects/projects.jsx";
import Blog from "../components/blog/blog.jsx";
import Contact from "../components/contact/contact.jsx";
import ReactGA from "react-ga";
import InitializeReactGA from "./googleAnalytics";

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}
export default function Pages() {
  usePageViews();
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
