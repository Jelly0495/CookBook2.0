import React from "react";
import IngredientsTab from "./IngredientsTab/IngredientsTab";
import InstructionsTab from "./InstructionsTab/InstructionTab";
import Slideshow from "./Slideshow/Slideshow";
import "./style.css";

let recipeData = [
  {
    title: "Grandfather's scrambled eggs",
    ingredients: [
      {
        title: "Salt",
        description: "",
        ammount: "1TSP",
      },
      {
        title: "Pepper",
        description: "Black pepper.",
        ammount: "1TSP",
      },
      {
        title: "Onion",
        description: "White or Red.",
        ammount: "1Pc",
      },
      {
        title: "Olive oil",
        description: "Possible also sunflower oil.",
        ammount: "1TBSP",
      },
      {
        title: "Eggs",
        description: "",
        ammount: "4Pcs",
      },
    ],
    summary:
      "This recipe is from my grandfather. he used to make it for breakfast for me when I was spending my holiday time at his house, as little kid. I still can feel his house when I make this meal.",
  },
];

function Recipe(props) {
  return (
    <div>
      {recipeData.map((recipe) => {
        return (
          <div className="recipe-wrapper container">
            <h1 className="display-2">{recipe.title}</h1>
            <h1 className="display-6">Ingredients list:</h1>
            <div className="row mt-md-2">
              <div className="col-md-6 mb-4">
                <IngredientsTab
                  ingredients={recipe.ingredients}
                ></IngredientsTab>
              </div>
              <div className="col-md-6">
                <Slideshow></Slideshow>
              </div>
            </div>
            <hr></hr>
            <h1 className="display-6">How to:</h1>
            <div className="mb-5">
              <InstructionsTab></InstructionsTab>
            </div>
            <hr></hr>
            <h1 className="display-5">Some last words:</h1>
            <blockquote>
              <p className="quote-text">"{recipe.summary}"</p>
            </blockquote>
          </div>
        );
      })}
    </div>
  );
}

export default Recipe;
