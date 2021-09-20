import React from "react";

import brand from "Assets/2.png";
import bgImage from "Assets/abstract.jpg";

import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Overview from "./Overview/Overview";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import "./style.css";

function About() {
  document.body.style.backgroundImage = `url('${bgImage}')`;

  return (
    <div className="about container-fluid">
      <div className="image-wrapper col-md-3 mx-auto mt-3 mb-3">
        <img className="about-img" src={brand}></img>
      </div>
      <div className="row col-md-10 mx-auto mt-5 mb-5">
        <div className="col-md-8 mx-auto">
          <Overview headline="Project overview"></Overview>
        </div>
      </div>
      <div className="row col-md-10 mx-auto g-5">
        <div className="col-md-6 mx-auto">
          <ProjectInfo headline="The cook book app"></ProjectInfo>
        </div>
      </div>
      <div className="row col-md-10 mx-auto g-5 mt-1 mb-5">
        <div className="col-md-6">
          <AboutMe headline="Who am I?"></AboutMe>
        </div>
        <div className="col-md-6">
          <ContactMe headline="Contact Me!"></ContactMe>
        </div>
      </div>
    </div>
  );
}

export default About;
