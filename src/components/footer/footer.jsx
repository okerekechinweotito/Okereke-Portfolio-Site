import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    /* id=footer is footer wrapper class=socialIcons is icons wrapper, each icon is wrapped in anchor tag(a) which in turn wraps a span which houses the actual icon  */
    <article id="footer">
      <hr className="footerLine" />
      <div className="socialIcons">
        <a
          href="https://twitter.com/okereke__?ref_src=twsrc%5Etfw"
          rel="noreferrer"
          target="_blank"
        >
          <span class="fab fa-twitter "></span>
        </a>
        <a
          href="https://github.com/okerekechinweotito"
          rel="noreferrer"
          target="_blank"
        >
          <span className="fab fa-github "> </span>
        </a>
        <a
          href="https://www.linkedin.com/in/chinweotito-okereke-9185941ba//"
          rel="noreferrer"
          target="_blank"
        >
          <span className="fab fa-linkedin "> </span>
        </a>
        <a
          href="https://join.slack.com/t/okerekesworkspace/shared_invite/zt-k4qr21b8-Te1U5SF~_betOJ7BfvESoQ"
          rel="noreferrer"
          target="_blank"
        >
          <span className="fab fa-slack "> </span>
        </a>
        <a
          href="https://okereke.hashnode.dev/"
          rel="noreferrer"
          target="_blank"
        >
          <span className="iconify" data-icon="simple-icons:hashnode"></span>
        </a>
        <a href="https://discord.gg/ydh7dqv" rel="noreferrer" target="_blank">
          <span className="fab fa-discord "></span>
        </a>
      </div>
    </article>
  );
};

export default Footer;
