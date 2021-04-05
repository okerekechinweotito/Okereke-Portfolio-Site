import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import Resume from "./components/resume/resume.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Blog from "./components/blog/blog.jsx";
import Contact from "./components/contact/contact.jsx";
import ScrollToTop from "./components/footer/scrollToTop.jsx";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";
import { useEffect } from "react";

ReactGA.initialize("256931987");

const history = createHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <BrowserRouter history={history}>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
