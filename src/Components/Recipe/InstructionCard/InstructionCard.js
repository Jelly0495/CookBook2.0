import React from "react";
import "./style.css";

function InstructionCard(props) {
  return (
    <div className="instruction-card card">
      <div className="card-body">
        <strong className="col-md-8 text-start">
          {props.step}) {props.title}
        </strong>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
