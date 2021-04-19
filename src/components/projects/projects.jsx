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
            name={"Bogo Apps"}
            description={
              "An interactive and colorful Demo Website about Children Education, Children apps and Children Stories"
            }
            technologies={"| HTML | SCSS | JavaScript |"}
            demo={"http://bogo.okereke.dev"}
            repo={"https://github.com/okerekechinweotito/bogo-apps"}
            cssidentifier={"bogoApp"}
          />

          <Card
            name={"ZURI Landing Page"}
            description={
              "A Landing_Page Prototype made for ZURI-TEAM and INGRESSIVE_FOR_GOOD"
            }
            technologies={"| HTML | CSS | Bootstrap | JavaScript |"}
            demo={"https://team-thor-landing-page.vercel.app"}
            repo={
              "https://github.com/okerekechinweotito/TEAM-THOR--LANDING-PAGE"
            }
            cssidentifier={"zuriLanding"}
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
            name={"Okereke.dev"}
            description={"My Portfolio Site"}
            technologies={"| HTML | CSS | React-Router "}
            demo={"https://www.okereke.dev/"}
            repo={"https://github.com/okerekechinweotito/okereke.dev"}
            cssidentifier={"okerekeDev"}
          />

          <Card
            name={"ZaddyTv"}
            description={"Landing Page for a Whatsapp TV"}
            technologies={"| HTML | CSS | "}
            demo={"http://zaddytv.ga"}
            repo={"https://github.com/okerekechinweotito/ZaddyTv"}
            cssidentifier={"zaddyTv"}
          />

          <Card
            name={"Enye Profiles"}
            description={
              "Enye Profiles - fetches data from Enye-API and dynamically renders User Profiles"
            }
            technologies={"| HTML | Enye-API | React | Evergreen-UI | CSS |"}
            demo={" https://enye-frontend-challenge.vercel.app/"}
            repo={
              "https://github.com/okerekechinweotito/enye-frontend-challenge"
            }
            cssidentifier={"enyeProfiles"}
          />

          <Card
            name={"Coffee Shop"}
            description={"Coffee Shop Landing page"}
            technologies={"| HTML | SCSS | JavaScript"}
            demo={"https://coffee.okereke.dev/"}
            repo={"https://github.com/okerekechinweotito/coffee-shop"}
            cssidentifier={"coffeeShop"}
          />

          <Card
            name={"Todo List"}
            description={"Todo List made with React"}
            technologies={"| HTML | CSS | React"}
            demo={"https://todo-list-okereke.vercel.app/"}
            repo={"https://github.com/okerekechinweotito/react-todo_list"}
            cssidentifier={"todoList"}
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
