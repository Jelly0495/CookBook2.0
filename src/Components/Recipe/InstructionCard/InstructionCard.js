import React, {useState} from "react";
import "./style.css";

function InstructionCard(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={
      clicked === true
      ? "instruction-card-selected card"
      : "instruction-card card"
    }
    style={
      clicked === true
      ? {backgroundColor:`rgba(${props.clrArray.r}, ${props.clrArray.g}, ${props.clrArray.b}, 0.85)`}
      : {}
    }
    onClick={() => {
      if(!clicked){
        setClicked(!clicked);
      }
    }}
    >
      <div className="card-body">
        <strong className="col-md-8 text-start card-text">
          {props.step}) {props.title}
        </strong>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
