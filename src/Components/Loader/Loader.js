import React from "react";
import "./style.css";

function Loader() {
  return (
    <div className="container">
      <div className="home-loading d-flex justify-content-center">
        <div className="spinner-grow loader" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
