import React from "react";
import "./style.css";
import bgImage from "../../Assets/abstract.jpg";
import brand from "../../Assets/2.png";
import Overview from "./Overview/Overview";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

function About() {
  document.body.style.backgroundImage = `url('${bgImage}')`;
  document.getElementById("root").style.backgroundImage =
    "linear-gradient(to bottom, rgba(170, 213, 142,.05),rgba(65, 73, 59,0.25))";

  return (
    <div className="about container-fluid">
      <div className="image-wrapper col-md-3 mx-auto mt-5">
        <img className="about-img" src={brand}></img>
      </div>
      <div className="row col-md-10 mx-auto g-5 mt-3">
        <div className="col-md-6">
          <Overview headline="Project overview"></Overview>
        </div>
        <div className="col-md-6">
          <ProjectInfo headline="The cookbook app"></ProjectInfo>
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
