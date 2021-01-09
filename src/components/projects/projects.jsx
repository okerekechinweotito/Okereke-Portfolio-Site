import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

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
          {/* MovieZone */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Movie Search App</strong>
              <br />
            </span>
            <span className="projectDescription">
              Discover new movies and watch exciting trailers
              <br />
              <i>
                | ReactJS | MovieDB API | Styled Components | Context API |
                Framer Motion |
              </i>
            </span>

            <div className="movieZone"></div>
            <a href="http://movie.okereke.dev" rel="noreferrer" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/MovieZone"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* Bogo app */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Bogo Apps</strong>
              <br />
            </span>
            <span className="projectDescription">
              An interactive and colorful Demo Website about Children Education,
              Children apps and Children Stories
              <br />
              <i>| HTML | SCSS | JavaScript |</i>
            </span>

            <div className="bogoApp"></div>
            <a href="http://bogo.okereke.dev" rel="noreferrer" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/bogo-apps"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* Quizz app */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Quiz App</strong>
              <br />
            </span>
            <span className="projectDescription">
              Quiz App - Test your knowledge with a range of General Questions
              <br />
              <i>| HTML | CSS | ReactJS |</i>
            </span>

            <div className="quizApp"></div>
            <a href="http://quiz.okereke.dev" rel="noreferrer" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/quiz-app"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* Github search */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Github Search App</strong>
              <br />
            </span>
            <span className="projectDescription">
              View your github statistics represented on graphs and browse your
              Top Repositories
              <br />
              <i>| ReactJS | TailwindCSS | GhPolyglot | FramerMotion</i>
            </span>

            <div className="githubSearch"></div>
            <a
              href="http://github.okereke.dev"
              rel="noreferrer"
              target="_blank"
            >
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/github-search"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* okereke.dev */}
          <div className="projectBox">
            <span className="projectTitle">
              {" "}
              <strong> Okereke.dev</strong>
              <br />
            </span>
            <span className="projectDescription">
              My Portfolio Site
              <br />
              <i>| HTML | CSS | React-Router </i>
            </span>

            <div className="okerekeDev"></div>
            <a href="https://www.okereke.dev/" rel="noreferrer" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>
            <a
              href="https://github.com/okerekechinweotito/okereke.dev"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* ZaddyTV */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>ZaddyTv</strong>
              <br />
            </span>
            <span className="projectDescription">
              Landing Page for a Whatsapp TV
              <br />
              <i>| HTML | CSS |</i>{" "}
            </span>

            <div className="zaddyTv"></div>
            <a href="http://zaddytv.ga" rel="noreferrer" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/ZaddyTv"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* Coffee Shop */}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Coffee Shop</strong>
              <br />
            </span>
            <span className="projectDescription">
              Coffee Shop Landing page
              <br />
              <i>| HTML | SCSS | JavaScript</i>
            </span>

            <div className="coffeeShop"></div>
            <a
              href="https://coffee.okereke.dev/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/coffee-shop"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>

          {/* todo list*/}
          <div className="projectBox">
            <span className="projectTitle">
              <strong>Todo List</strong>
              <br />
            </span>
            <span className="projectDescription">
              Todo List made with React
              <br />
              <i>| HTML | CSS | React</i>
            </span>

            <div className="todoList"></div>
            <a
              href="https://todo-list-okereke.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>

            <a
              href="https://github.com/okerekechinweotito/react-todo_list"
              rel="noreferrer"
              target="_blank"
            >
              <button className="repo">
                <i class="fab fa-github"></i> Repo
              </button>
            </a>
          </div>
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
