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

        <div className="blogWrapper">
          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>Battle of the Bastards - Angular vs Vue</strong>
            </span>
            <div className="blogPic1"></div>
            <div className="blogSnippet">
              React.js remains the undisputed king of the 7 kingdoms.Angular is
              Google’s advanced and mature JavaScript framework. It is practical
              and useful, but it takes time to build applications. Vue, on the
              other side, is more suited to less demanding applications and is
              often used for swift prototyping ...
            </div>
            <a
              href="https://blog.okereke.dev/battle-of-the-bastards-angular-vs-vue"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>

          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>Top 7 Programming Languages to learn in 2021</strong>
            </span>
            <div className="blogPic2"></div>
            <div className="blogSnippet">
              Are you trying to figure out what languages are going to be in
              demand in 2021? This is the exact article you need to be looking
              at. This article highlights the hottest most in-demand programming
              languages of 2021 ...
            </div>
            <a
              href="https://blog.okereke.dev/top-7-programming-languages-to-learn-in-2021"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>

          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>Top 10 Skills Every Frontend Developer must have</strong>
            </span>
            <div className="blogPic3"></div>
            <div className="blogSnippet">
              If you’re looking to break into tech, front end development is
              both a straight ahead and versatile way of getting there. You’ll
              have a specific base of skills that’ll make you attractive to
              employers, but one that’s broad enough to let you find an
              employment opportunity that works for you.A quick scan of current
              job listings for front end developers shows that there’s a clear
              and common pool of skills employers are looking for ...
            </div>
            <a
              href="https://blog.okereke.dev/top-10-skills-every-frontend-developer-must-have"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>

          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>VS Code Shortcut reference/cheat-sheet (Windows)</strong>
            </span>
            <div className="blogPic4"></div>
            <div className="blogSnippet">
              Below is a complete reference of all VS code keyboard shortcuts
              (Visual Studio code for Windows). Like and share ! Other operating
              systems’ keyboard shortcuts and additional unassigned shortcuts
              available at ...
            </div>
            <a
              href="https://blog.okereke.dev/vs-code-shortcut-referencecheat-sheet-windows"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>

          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>15 Top Web development trends in 2021</strong>
            </span>
            <div className="blogPic5"></div>
            <div className="blogSnippet">
              In a highly competitive market such as a digital one, it is
              important to foresee changes and learn how to adapt to them. Get
              to know 15 web trends of the next year and meet the decade fully
              armed!. 1 Progressive Web Apps (PWA) ...
            </div>
            <a
              href="https://blog.okereke.dev/15-top-web-development-trends-in-2021"
              rel="noreferrer"
              target="_blank"
            >
              <button className="blogReadButton">Read More...</button>
            </a>
          </div>

          {/* blog post */}
          <div className="blogBox">
            <span className="projectTitle">
              <strong>World's Top 10 Internet Companies</strong>
            </span>
            <div className="blogPic6"></div>
            <div className="blogSnippet">
              Internet‑based companies generate revenue through online sales,
              financial transaction fees, paid advertising, cloud services, and
              a host of other business lines. The year 2020 were particularly
              strong growth years for this sector.The following 10 publicly
              traded Internet-based companies topped the list. ...
            </div>
            <a
              href="https://blog.okereke.dev/worlds-top-10-internet-companies"
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
          <div className="prevButton" id="static-button-prev">
            Résumé
          </div>
        </Link>
        <Link to="/contact">
          <div className="nextButton" id="static-button-next">
            Contact
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Blog;
