import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  /*  window.document.URL.onchange = function () {
    document.style.backgroundColor = "red";
  }; */

  /* hide header when user scrolls down */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      document.getElementById("header").style.backgroundColor = "#0b052c";
    } else {
      document.getElementById("header").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };

  /* bring out side bar and then change menu-line styling (when menuline @ menu container is clicked)*/
  const handleToggle = (x) => {
    let sideNav = document.querySelector(".sideNavHidden");
    sideNav.classList.toggle("sideNav");
    x.target.classList.toggle("change");
  };

  /* hide sidebar && change menu line styling (when sidebar is clicked) */
  const handleNavBar = (e) => {
    let menuContainer = document.querySelector(".menuContainer");
    let sideNavHidden = document.querySelectorAll(".resetColor");
    var sideNav = document.querySelector(".sideNav");

    if (menuContainer.classList.contains("change")) {
      menuContainer.classList.remove("change");
      sideNav.classList.toggle("sideNav");
    }
    /* loop over each instance of span on sidenav */
    sideNavHidden.forEach((spans) => {
      spans.style.backgroundColor = "#0b052c";
    });
    e.target.style.backgroundColor = "#09041d";
  };

  return (
    /* Header Bar */
    <header>
      <aside id="header">
        <Link to="/">
          <div className="okerekeLogo">Okereke</div>
        </Link>

        {/* 3 menu-line */}

        <div className="menuContainer" onClick={handleToggle}>
          <div className="bar1"> </div>
          <div className="bar2"> </div>
          <div className="bar3"> </div>
        </div>
      </aside>
      {/* side navigation bar */}
      <section className="sideNavHidden">
        <div className="okerekeLogo">Okereke</div>

        <Link to="/">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fas fa-home"></i>Home
          </span>
        </Link>

        <Link to="/skills">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fas fa-cogs"></i>Skills
          </span>
        </Link>

        <Link to="/projects">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fas fa-code"></i>Projects
          </span>
        </Link>
        <Link to="/resume">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fas fa-user"></i>&nbsp;Résumé
          </span>
        </Link>
        <Link to="/blog">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fab fa-blogger-b"></i>&nbsp;Blog
          </span>
        </Link>
        <Link to="/contact">
          <span className="resetColor" onClick={handleNavBar}>
            <i className="fas fa-envelope"></i>&nbsp;Contact
          </span>
        </Link>
      </section>
    </header>
  );
};
export default Header;
