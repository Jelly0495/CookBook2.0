import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="text-center">
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://www.facebook.com/risko.uzik"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="mailto:uzik.dev@gmail.com"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://www.instagram.com/richarduzik/"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://www.linkedin.com/in/richard-uzik-accenture"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://github.com/Jelly0495"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
