import React from "react";

function AboutMe(props) {
  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <blockquote class="blockquote">
        <p>
          Hi, my name is <ins>Richard</ins>. I am a{" "}
          <ins>AppDev Senior Analyst</ins> at Accenture Slovakia. I studied both{" "}
          <ins>Informatics</ins> and <ins>Mechatronics</ins> at Slovak Technical
          University in Bratislava.
        </p>
      </blockquote>
    </>
  );
}

export default AboutMe;
