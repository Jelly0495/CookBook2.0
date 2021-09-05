import React from "react";
import { useState } from "react";
import "./style.css";

function IngredientCard(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={
        clicked === true
          ? "ingredient-card-selected card h-100 bg-light m-2"
          : "ingredient-card card h-100 bg-light m-2"
      }
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <div className="card-body">
        <div className="row">
          <strong className="col-md-8 text-start">{props.title}</strong>
          <strong className="done-text col-md-4 text-end d-none d-md-block">
            {clicked === true ? "✓" : ""}
          </strong>
        </div>
        <div className="row">
          <p className="col-md-8 text-start small">{props.description}</p>
          <p className="col-md-4 text-end small">{props.ammount}</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientCard;
