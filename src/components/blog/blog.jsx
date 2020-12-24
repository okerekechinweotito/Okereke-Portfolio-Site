import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    /* article is page wrapper */
    <article id="blog">
      {/* blog */}
      <section className="blogContent">
        <h2>
          Blog
          <hr />
        </h2>
        {/* blog post */}
        <div className="blogWrapper">
          <div className="blogBox">
            <span className="projectTitle">
              Top 7 Programming Languages to learn in 2021
            </span>
            <div className="blogPic1"></div>
            <div className="blogSnippet">
              Are you trying to figure out what languages are going to be in
              demand in 2021? This is the exact article you need to be looking
              at. This article highlights the hottest most in-demand programming
              languages of 2021 ...
            </div>
            <a
              href="https://okereke.hashnode.dev/top-7-programming-languages-to-learn-in-2021"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>
          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              (A Short Rant) Computer Science Lecturers - Incompetence is
              certainty in the absence of expertise.
            </span>
            <div className="blogPic2"></div>
            <div className="blogSnippet">
              From clueless Lecturers who use deprecated syllabus, to Professors
              who can't muster a single line of code. Computer Science lecturers
              in Nigeria have become an item of ridicule and a National
              disgrace...
            </div>
            <a
              href="https://okereke.hashnode.dev/a-short-rant-computer-science-lecturers-incompetence-is-certainty-in-the-absence-of-expertise"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>
        </div>
      </section>

      {/* react router dependency next and prev buttons */}
      <div class="buttonContainer">
        <Link to="/resume">
          <div className="prevButton">Résumé</div>
        </Link>
        <Link to="/contact">
          <div className="nextButton">Contact</div>
        </Link>
      </div>
    </article>
  );
};

export default Blog;
