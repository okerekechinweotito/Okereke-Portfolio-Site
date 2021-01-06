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
              Movie Search App
              <br />
            </span>
            <span className="projectDescription">
              Discover new movies and watch exciting trailers
              <br />| React | MovieDB API | Styled Components
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

          {/* Quizz app */}
          <div className="projectBox">
            <span className="projectTitle">
              Quiz App
              <br />
            </span>
            <span className="projectDescription">
              Quiz App - Test your knowledge with a range of General Questions
              <br />| HTML | CSS | React |
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

          {/* okereke.dev */}
          <div className="projectBox">
            <span className="projectTitle">
              {" "}
              Okereke.dev
              <br />
            </span>
            <span className="projectDescription">
              My Portfolio Site
              <br />| React | HTML | CSS |{" "}
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
              ZaddyTv
              <br />
            </span>
            <span className="projectDescription">
              Landing Page for a Whatsapp TV
              <br />| HTML | CSS |{" "}
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

          {/* todo list*/}
          <div className="projectBox">
            <span className="projectTitle">
              Todo List
              <br />
            </span>
            <span className="projectDescription">
              Todo List made with React
              <br />| HTML | CSS | React
            </span>

            <div className="todoList"></div>
            <a
              href="https://vercel.com/okerekechinweotito/react-todo-list/77743cyoh"
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
