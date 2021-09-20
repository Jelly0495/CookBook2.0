import React, {useState} from "react";
import "./style.css";

function InstructionCard(props) {
  const [clicked, setClicked] = useState(false);

  const cardClass = clicked ? "instruction-card-selected" : "instruction-card"
  const cardStyle = clicked
  ? { backgroundColor: `rgba(${props.clrArray.r}, ${props.clrArray.g}, ${props.clrArray.b}, 0.85)` }
  : {}

  const handleClick = () => {
    !clicked && setClicked(!clicked);
  };

  return (
    <div
      className={ `${cardClass} card` }
      style={ cardStyle }
      onClick={ handleClick }
    >
      <div className="card-body">
        <strong className="col-md-8 text-start card-text">
          {`${props.step}) ${props.title}`}
        </strong>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
