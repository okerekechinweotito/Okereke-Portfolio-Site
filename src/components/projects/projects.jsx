import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import Card from "./card";

const Projects = () => {
  return (
    /* id=projects is main page wrapper */
    <article id="projects">
      {/* Projects */}
      <section className="projectsContent">
        <h2>
          Projects
          <hr />
        </h2>
        <div className="projectWrapper">
          <Card
            name={"Movie Search App"}
            description={"Discover new movies and watch exciting trailers"}
            technologies={
              "| ReactJS | MovieDB API | Styled Components | Context API | Framer Motion |"
            }
            demo={"http://movie.okereke.dev"}
            repo={"https://github.com/okerekechinweotito/MovieZone"}
            cssidentifier={"movieZone"}
          />

          <Card
            name={"endPoverty"}
            description={
              "endPoverty is a non-profit organization founded to help those living under extreme poverty inline with the United Nations Sustainable Development Goals"
            }
            technologies={"| HTML | CSS | JavaScript |"}
            demo={"http://www.endpoverty.ml"}
            repo={"https://github.com/okerekechinweotito/endPoverty-commercial"}
            cssidentifier={"endPoverty"}
          />

          <Card
            name={"ZURI CHAT"}
            description={
              "HNGi8 - A messaging app inspired by slack that lets professionals collaborate through workspaces "
            }
            technologies={"| ReactJS | ExpressJS | Golang | "}
            demo={"https://www.zuri.chat"}
            repo={"https://github.com/okerekechinweotito/zc_main"}
            cssidentifier={"zuriChat"}
          />

          <Card
            name={"Github Search App"}
            description={
              "View your github statistics represented on graphs and browse your Top Repositories"
            }
            technologies={
              "| ReactJS | TailwindCSS | GhPolyglot | FramerMotion |"
            }
            demo={"http://github.okereke.dev"}
            repo={"https://github.com/okerekechinweotito/github-search"}
            cssidentifier={"githubSearch"}
          />

          <Card
            name={"Bogo Apps"}
            description={
              "An interactive and colorful landing page about Children Education, Children apps and Children Stories"
            }
            technologies={"| HTML | SCSS | JavaScript |"}
            demo={"http://bogo.okereke.dev"}
            repo={"https://github.com/okerekechinweotito/bogo-apps"}
            cssidentifier={"bogoApp"}
          />

          <Card
            name={"Quiz App"}
            description={
              "Quiz App - Test your knowledge with a range of General Questions"
            }
            technologies={"| HTML | CSS | ReactJS |"}
            demo={"http://quiz.okereke.dev"}
            repo={"https://github.com/okerekechinweotito/quiz-app"}
            cssidentifier={"quizApp"}
          />

          <Card
            name={"Okereke.dev"}
            description={"My Portfolio Site"}
            technologies={"| HTML | CSS | React-Router "}
            demo={"https://www.okereke.dev/"}
            repo={"https://github.com/okerekechinweotito/okereke.dev"}
            cssidentifier={"okerekeDev"}
          />
        </div>
      </section>

      {/* react router dependency  next and prev buttons  */}
      <div class="buttonContainer">
        <Link to="/skills">
          <div className="prevButton" id="static-button-prev">
            Skills
          </div>
        </Link>
        <Link to="/resume">
          <div className="nextButton" id="static-button-next">
            Résumé
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Projects;
