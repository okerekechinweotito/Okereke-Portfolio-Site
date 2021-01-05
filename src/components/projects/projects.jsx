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

          {/* okereke.ga */}
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
              href="https://github.com/okerekechinweotito/ZaddyTv-landing_page_for_whatsapp_group_tv"
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
