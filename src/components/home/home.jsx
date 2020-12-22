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
              500,
              "Google Analytics Expert",
              500,
              "Open-Source Contributor",
              500,
              "Computer Science Major",
              500,
              "AI Advocate",
              500,
              "Hackathon Winner",
              500,
              "Web Master",
              500,
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
