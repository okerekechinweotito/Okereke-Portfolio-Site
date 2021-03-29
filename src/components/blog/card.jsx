import React from "react";
import "./blog.css";

const Card = ({ name, cssidentifier, description, url }) => {
  return (
    <div className="blogBox">
      <span className="projectTitle">
        <strong>{name}</strong>
      </span>
      <div className={cssidentifier}></div>
      <div className="blogSnippet">{description}</div>
      <a href={url} rel="noreferrer" target="_blank">
        <button className="blogReadButton">Read More...</button>
      </a>
    </div>
  );
};

export default Card;
