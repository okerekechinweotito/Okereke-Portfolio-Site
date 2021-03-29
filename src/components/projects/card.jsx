import React from "react";
import "./projects.css";

const Card = ({
  name,
  description,
  technologies,
  demo,
  repo,
  cssidentifier,
}) => {
  return (
    <div className="projectBox">
      <span className="projectTitle">
        <strong>{name}</strong>
        <br />
      </span>
      <span className="projectDescription">
        {description}
        <br />
        <i>{technologies}</i>
      </span>

      <div className={cssidentifier}></div>
      <a href={demo} rel="noreferrer" target="_blank">
        <button className="demo">
          <i class="fas fa-globe"></i> Demo
        </button>
      </a>

      <a href={repo} rel="noreferrer" target="_blank">
        <button className="repo">
          <i class="fab fa-github"></i> Repo
        </button>
      </a>
    </div>
  );
};

export default Card;
