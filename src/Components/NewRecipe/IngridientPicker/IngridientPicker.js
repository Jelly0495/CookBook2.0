import React, { useState, useEffect } from "react";
import IngredientData from "./IngredientData/IngredientData";
import "./style.css";

function IngredientPicker(props) {
  const ingredientGroups = [];

  const [ingArray, setIngArray] = useState([]);

  useEffect(() => {
    props.sendToRecipe(ingArray);
  }, [ingArray]);

  const sendIngToArray = (ing) => {
    setIngArray((old) => [...old, ing]);
  };

  for (let i = 0; i < props.counter; i++) {
    ingredientGroups.push(
      <IngredientData
        key={i}
        index={i}
        handleAdd={sendIngToArray}
      ></IngredientData>
    );
  }

  return <>{ingredientGroups}</>;
}

export default IngredientPicker;
