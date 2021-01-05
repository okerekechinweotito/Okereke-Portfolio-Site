import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    /* article is page wrapper */
    <article id="contact">
      {/* contact */}
      <section className="contactContent">
        <h2>
          Contact
          <hr />
        </h2>
        <div className="contactWrapper">
          <form name="contactForm" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contactForm" />
            <label>Name*</label>
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              required
            />
            <label>Email*</label>
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              required
            />
            <label>Message*</label>
            <textarea name="userMessage" placeholder="Input your Message" />
            <button type="submit">Send Mail &nbsp; >></button>
          </form>
        </div>
      </section>
      <div class="buttonContainer">
        {/* react router dependency next and prev buttons */}
        <Link to="/blog">
          <div className="prevButton" id="static-button-prev">
            Blog
          </div>
        </Link>
        <Link to="/">
          <div className="nextButton" id="static-button-next">
            Home
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Contact;
