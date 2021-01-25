import React from "react";
import "./home.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    /* id=home is page wrapper  class=okerekeAvatar is Avatar picture class=textAvatar is bold title
     */
    <article id="home">
      <div id="okerekeAvatar"></div>
      <div className="textAvatar">
        Hey there ! &nbsp; I'm Okereke <br />
        <span>
          {" "}
          {/* react-typical dependency */}
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              "Frontend Developer",
              2000,
              "Google Analytics Expert",
              2000,
              "Open-Source Contributor",
              2000,
              "Computer Science Major",
              2000,
              "AI Advocate",
              2000,
              "Hackathon Winner",
              2000,
              "Web Master",
              2000,
            ]}
          ></Typical>
        </span>
      </div>
      {/* react router dependency  next and prev buttons  */}
      <Link to="/skills">
        <div className="exploreButton">Explore</div>
      </Link>
    </article>
  );
};

export default Home;
