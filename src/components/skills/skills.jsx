import React from "react";
import "./skills.css";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    /* id="skills" is the main page wrapper */
    <article id="skills">
      {/* Skills */}
      <section className="skillsContent">
        <h2>
          Skills <hr />
        </h2>
        <div className="logoWrap">
          <div className="logoBox">
            <div className="logoPic">
              <i className="fab fa-html5 fa-7x"></i>
            </div>
            <span>HTML</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i className="fab fa-css3-alt fa-7x"></i>
            </div>
            <span>CSS</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i className="fab fa-js-square fa-7x"></i>
            </div>
            <span>Javascript</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i class="fab fa-react fa-7x"></i>
            </div>
            <span>React</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i className="devicon-redux-original colored"></i>
            </div>
            <span>Redux</span>
          </div>

          <div className="logoBox">
            <div className="logoPic">
              <i class="devicon-sass-original colored"></i>
            </div>
            <span>SCSS</span>
          </div>

          <div className="logoBox">
            <div className="logoPic">
              <i class="devicon-jquery-plain colored"></i>
            </div>
            <span>jQuery</span>
          </div>

          <div className="logoBox">
            <div className="googleA"></div>
            <span>Google Analytics</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i class="fab fa-git-alt fa-7x"></i>
            </div>
            <span>Git</span>
          </div>

          <div className="logoBox">
            <div className="logoPic">
              <i class="devicon-webpack-plain colored"></i>
            </div>
            <span>Webpack</span>
          </div>
          <div className="logoBox">
            <div className="logoPic">
              <i class="fab fa-npm fa-7x"></i>
            </div>
            <span>Node Package Manager</span>
          </div>
          <div className="logoBox">
            <div className="seo"></div>
            <span>Search Engine Optimization</span>
          </div>
          <div className="logoBox">
            <div className="jsx"></div>
            <span>Javascript eXtension</span>
          </div>

          <div className="logoBox">
            <div className="logoPic">
              <i class="fab fa-github fa-7x"></i>
            </div>
            <span>Github</span>
          </div>
          <div className="logoBox">
            <div className="photoshop"></div>
            <span> Photoshop</span>
          </div>

          <div className="logoBox">
            <div className="logoPic">
              <i class="devicon-illustrator-plain colored"></i>
            </div>
            <span>Illustrator</span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="valuesContent">
        <h2>
          Values <hr />
        </h2>
        <div className="logoWrap">
          <div className="logoBox">
            <div className="responsivePic"></div>
            <span>
              <strong>RESPONSIVE</strong>
              <br /> my website scales nicely on any device,big or small
            </span>
          </div>
          <div className="logoBox">
            <div className="fastPic"></div>
            <span>
              <strong>SPEED</strong>
              <br />
              fast load times and lag free interaction
            </span>
          </div>
          <div className="logoBox">
            <div className="simplePic"></div>
            <span>
              <strong>SIMPLICITY</strong>
              <br />I keep my website layout simple and consistent
            </span>
          </div>
          <div className="logoBox">
            <div className="dynamicPic"></div>
            <span>
              <strong>DYNAMIC</strong>
              <br />I love making pages come to live
            </span>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="recommendContent">
        <h2>
          Recommendations <hr />
        </h2>
        <div className="recommendWrapper">
          <div className="recommendBox">
            <span>
              <em style={{ fontSize: "2.5em" }}>"</em>
              <br />
              I was fortunate enough to work on a project with Okereke and got
              to experience his skills firsthand. He was such an amazing team
              member and a phenomenal frontend developer. He took on every task
              with a positive attitude and jumped at opportunities to help his
              teammates when they encountered tough problems. You want someone
              like Okereke on your team
              <br />
              <em style={{ fontSize: "2.5em" }}> "</em>
            </span>
            <div className="recommendPerson">
              <span className="recommendPic1"></span>
              <span className="recommendName">
                Chibuikem Okaneme
                <br />
                DSC Lead at Developer Student Club
                <hr />
              </span>
            </div>
          </div>

          <div className="recommendBox">
            <span>
              <em style={{ fontSize: "2.5em" }}>"</em>
              <br />
              Okereke is a very passionate and talented developer with an
              impeccable drive to learn and utilize new technologies. He goes
              above and beyond with his projects and also maintains an
              incredible work ethic.
              <br />
              <em style={{ fontSize: "2.5em" }}> "</em>
            </span>
            <div className="recommendPerson">
              <span className="recommendPic2"></span>
              <span className="recommendName">
                Ruth Beltre
                <br />
                Software Engineer at Springboard
                <hr />
              </span>
            </div>
          </div>
          <div className="recommendBox">
            <span>
              <em style={{ fontSize: "2.5em" }}>"</em>
              <br />
              Okereke is a success driven asset to any team. He displays
              in-depth knowledge of React , HTML/CSS, Javascript and much more.
              He is very dedicated to anything he does. He pays attention to
              detail and musters readable code that follows industry best
              practices. His taste for more knowledge is only bested by his
              dedication and hardwork. I highly recommend him.
              <br />
              <em style={{ fontSize: "2.5em" }}> "</em>
            </span>
            <div className="recommendPerson">
              <span className="recommendPic3"></span>
              <span className="recommendName">
                Ndubuisi Onyemenam
                <br />
                Software Engineer at PATRICIA
                <hr />
              </span>
            </div>
          </div>

          <div className="recommendBox">
            <span>
              <em style={{ fontSize: "2.5em" }}>"</em>
              <br />
              I have had the great pleasure of working with Okereke on 2
              occasions. He is hardworking and humble. He has strong leadership
              skills and was always willing to go out of his way to help any
              member of our team. Okereke would be a valuable asset to any team
              <br />
              <em style={{ fontSize: "2.5em" }}> "</em>
            </span>
            <div className="recommendPerson">
              <span className="recommendPic4"></span>
              <span className="recommendName">
                Dennis Chukwunta
                <br />
                Backend Developer at Google Developers Group
                <hr />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* react router dependency  next and prev buttons  */}
      <section className="buttonContainer">
        <Link to="/">
          <div className="prevButton" id="static-button-prev">
            Home
          </div>
        </Link>
        <Link to="/projects">
          <div className="nextButton" id="static-button-next">
            Projects
          </div>
        </Link>
      </section>
    </article>
  );
};

export default Skills;
