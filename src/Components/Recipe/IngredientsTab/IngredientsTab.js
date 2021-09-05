import React from "react";
import IngredientCard from "../IngredientCard/IngredientCard";
import "./style.css";

function IngredientsTab(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-2">
      {props.ingredients.map((card) => {
        return (
          <div key={card.title} className="col">
            <IngredientCard
              title={card.title}
              description={card.description}
              ammount={card.ammount}
            />
          </div>
        );
      })}
    </div>
  );
}

export default IngredientsTab;
