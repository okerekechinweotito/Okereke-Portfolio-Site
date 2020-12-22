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
          <form action="POST" data-netlify="true" name="contactForm">
            <label>Name*</label>
            <input
              type="text"
              name="yourName"
              placeholder="Your Name"
              required
            />
            <label>Email*</label>
            <input
              type="email"
              name="yourEmail"
              placeholder="Your Email"
              required
            />
            <label>Message*</label>
            <textarea
              placeholder="Input your Message"
              name="message"
              required
            />
            <input type="submit" value="Send Mail" />
          </form>
        </div>
      </section>
      <div class="buttonContainer">
        {/* react router dependency next and prev buttons */}
        <Link to="/blog">
          <div className="prevButton">Blog</div>
        </Link>
        <Link to="/">
          <div className="nextButton">Home</div>
        </Link>
      </div>
    </article>
  );
};

export default Contact;
