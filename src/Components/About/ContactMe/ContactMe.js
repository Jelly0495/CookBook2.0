import React from "react";

function ContactMe(props) {
  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <div className="row text-center col-md-8 mx-auto">
        <div className="col-md-6 icon">
          <a className="link" href="https://github.com/Jelly0495/CookBook2.0">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="col-md-6 icon">
          <a
            className="link"
            href="https://www.linkedin.com/in/richard-uzik-accenture"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
