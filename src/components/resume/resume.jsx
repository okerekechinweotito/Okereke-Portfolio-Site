import React, { Component } from "react";
import "./resume.css";
import { Link } from "react-router-dom";

class Resume extends Component {
  render() {
    return (
      /* article is page wrapper */
      <article id="resume">
        {/*  About About About */}
        <section className="summaryContent">
          <h2>
            Summary
            <hr />
          </h2>
          <p>
            My name is Okereke Chinweotito. I'm a Frontend Developer, Certified
            Google Analytics Expert, Computer Science Major and a Proficient Web
            Master. As a fast-learner I am able to speedily adapt to
            high-productive working environments while leveraging technology
            tools to deliver the best solution to client needs. I participate in
            AI Advocacy and I dabble into Machine Learning in my spare time. I
            also occasionally write on my blog
          </p>
        </section>

        {/* Experience Experience Experience*/}
        <section className="experienceContent">
          <h2>
            Experience <hr />
          </h2>
          <div className="box">
            <div className="logoName">
              <div className="upworkLogo"></div>
              <span>Upwork</span>
            </div>
            <ul>
              <h5>July 2020 - Present</h5>
              <li>
                Designed and Developed Web applications inline with client
                requirements
              </li>
              <li>
                Implemented a Search Engine Optimized Web application that
                scales nicely on any device
              </li>
              <li>
                Performed user-experience testing and debugging prior to live
                deployment
              </li>
              <li>
                Revised existing systems(codes) while suggesting improvements
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="logoName">
              <div className="gdgLogo"></div>
              <span style={{ fontSize: "1.3em" }}> Google Developers</span>
            </div>
            <ul>
              <h5>February 2020 - July 2020</h5>
              <li>
                Collaborated with other Google Student developers(IMSU Chapter)
                to design, build, and maintain web application
              </li>
              <li>
                Knowledge growth through peer to peer learning with other Google
                Student Developers
              </li>
              <li>
                Built web applications for various platforms using
                react+redux,netlify, and firebase
              </li>
              <li>
                Producing efficient and elegant code in line with industry best
                practices
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="logoName">
              <div className="weasleyLogo"></div>
              <span>Weasley Institute</span>
            </div>

            <ul>
              <h5>September 2019 - January 2020</h5>
              <li>Used Google Analytics to Monitor Client Web Traffic</li>
              <li>
                Created technical documentation as reference for future projects
              </li>
              <li>
                Professional working experience with HTML, CSS, Vanilla
                JS,React,Redux and Google Analytics.
              </li>
              <li>
                Compilied and assessed user feedback to improve website
                performance
              </li>
              <li>Debugged, maintained and improved on existing code</li>
            </ul>
          </div>
        </section>

        {/*  Education Education Education */}
        <section className="educationContent">
          <h2>
            Education <hr />
          </h2>
          <div className="box">
            <div className="logoName">
              <div className="imsuLogo"></div>
              <span>Imo State University</span>
            </div>
            <ul>
              <h5>September 2017 - September 2021</h5>
              <li>B.sc Computer Science</li>
              <li>Member @Google Student Developers Group </li>
              <li>Member @Nigerian Association Of Computer Science Students</li>
            </ul>
          </div>
          <div className="box">
            <div className="logoName">
              <div className="fccLogo"></div>
              <span>FreeCodeCamp</span>
            </div>
            <ul>
              <h5>2019 - 2020</h5>

              <li>Completed Responsive Web Design Certification Course</li>
              <li>
                Completed Javascript Algorithm and Data Structure Certification
                Course
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="logoName">
              <div className="sololearnLogo"></div>
              <span>SoloLearn</span>
            </div>
            <ul>
              <h5>2019 - 2020</h5>

              <li>Completed HTML Fundamentals Course</li>
              <li>Completed CSS Fundamentals Course </li>
              <li>Completed Javascript Tutorial Course </li>
              <li>Completed React+Redux Course </li>
            </ul>
          </div>

          <div className="box">
            <div className="logoName">
              <div className="llLogo"></div>
              <span>Linkedln Learning</span>
            </div>
            <ul>
              <h5>2019 - 2020</h5>

              <li>Completed Google Analytics Essential Training </li>
              <li>Completed SEO Foundations Tutorial </li>
            </ul>
          </div>
        </section>
        {/*  Certifications  Certifications  Certifications  */}
        <section className="certificationsContent">
          <h2>
            Certifications <hr />
          </h2>{" "}
          <div className="box" id="freeCodeCamp">
            <div className="logoName">
              <div className="fccLogo"></div>
              <span>FreeCodeCamp</span>
            </div>
            <div className="certBox">
              <h5>Responsive Web Design Certification</h5>
              <div className="certImage1"></div>
            </div>
            <div className="certBox">
              <h5>Javascript Algorithm and Data Structures </h5>
              <div className="certImage2"></div>
            </div>
          </div>
          <div className="box" id="linkedInLearning">
            <div className="logoName">
              <div className="llLogo"></div>
              <span>Linkedln Learning</span>
            </div>
            <div className="certBox">
              <h5>Google Analytics Certification</h5>
              <div className="certImage3"></div>
            </div>
            <div className="certBox">
              <h5>SEO Foundations Certification</h5>
              <div className="certImage4"></div>
            </div>
          </div>
          <div className="box" id="soloLearn">
            <div className="logoName">
              <div className="sololearnLogo"></div>
              <span>SoloLearn</span>
            </div>
            <div className="certBox">
              <h5>React+Redux Certification</h5>
              <div className="certImage5"></div>
            </div>
            <div className="certBox">
              <h5>Javascript Certification</h5>
              <div className="certImage6"></div>
            </div>
            <div className="certBox">
              <h5>CSS Certification</h5>
              <div className="certImage7"></div>
            </div>
            <div className="certBox">
              <h5>HTML Certification</h5>
              <div className="certImage8"></div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1oAr9BdPcOsZOi0vPkCoIpXlm80lmvBhY/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            {/* resume download */}
            <button className="resumeDownload">
              <i class="fa fa-download"></i> Download Resume
            </button>
          </a>
        </section>
        {/* react typical dependency prev and next buttons */}
        <section class="buttonContainer">
          <Link to="/projects">
            <div className="prevButton" id="static-button-prev">
              Projects
            </div>
          </Link>
          <Link to="/blog">
            <div className="nextButton" id="static-button-next">
              Blog
            </div>
          </Link>
        </section>
      </article>
    );
  }
}

export default Resume;
