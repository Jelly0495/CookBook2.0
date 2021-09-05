import React from "react";
import "./style.css";

function Error500() {
  return (
    <div className="container error-500">
      <p className="error-500-text">
        <span className="yellow">Oops!</span> We encountered
        <br />a <span className="yellow">server problem</span>
      </p>
      <p className="error-small">We are working hard on fixing this problem.</p>
    </div>
  );
}

export default Error500;
