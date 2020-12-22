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
          {/* okereke.dev */}
          <div className="projectBox">
            <span className="projectTitle">
              {" "}
              Okereke.dev
              <br />
            </span>
            <span className="projectDescription">
              My Portfolio site
              <br />| React | HTML | CSS |{" "}
            </span>

            <div className="okerekeDev"></div>
            <button className="demo">
              <i class="fas fa-globe"></i> Demo
            </button>
            <button className="repo">
              <i class="fab fa-github"></i> Repo
            </button>
          </div>

          {/* okereke.ga */}
          <div className="projectBox">
            <span className="projectTitle">
              Single-Page Profile
              <br />
            </span>
            <span className="projectDescription">
              A simple single page profile
              <br />| HTML | CSS |{" "}
            </span>

            <div className="singlePageProfile"></div>
            <a href="http://okereke.ga/" rel="external" target="_blank">
              <button className="demo">
                <i class="fas fa-globe"></i> Demo
              </button>
            </a>
            <a
              href="https://github.com/okerekechinweotito/Single-Page-Profile"
              rel="external"
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
          <div className="prevButton">Skills</div>
        </Link>
        <Link to="/resume">
          <div className="nextButton">Résumé</div>
        </Link>
      </div>
    </article>
  );
};

export default Projects;
