import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import bgImage from 'Assets/explosion.jpg';
import Loader from "Components/Loader/Loader";
import Maintenance from "Components/Maintenance/Maintenance";
import config from "config.json";

import IngredientsTab from "./IngredientsTab/IngredientsTab";
import InstructionsTab from "./InstructionsTab/InstructionTab";
import Slideshow from "./Slideshow/Slideshow";
import "./style.css";

function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 
  const { id } = useParams();
  
  const recipeDataApiUrl = `${config.API_SERVER_URL}/recipe/GetRecipe?id=${id}`;
  document.body.style.backgroundImage = `url('${bgImage}')`;

  useEffect(() => {
    const headers = {"Ocp-Apim-Subscription-Key" : config.API_SUBSCRIPTION_KEY};
    axios.get(recipeDataApiUrl, { headers: headers})
    .then((result) => {
        setRecipeData(result.data);
        setIsLoaded(true);
    })
    .catch((error) => setError(error));
  }, [recipeDataApiUrl]);

  return(
    <>
        {error && <Maintenance />}
        {!isLoaded && <Loader />}
        {isLoaded && (
          <div className="recipe-wrapper container">
            <h1 className="display-2 mt-2">{recipeData.title}</h1>
            <h1 className="display-6">Ingredients list:</h1>
            <div className="row mt-md-2">
              <div className="col-md-6 mb-4">
                <IngredientsTab ingredients={recipeData.ingredients}></IngredientsTab>
              </div>
              <div className="col-md-6">
                <Slideshow imagedata={recipeData.images}></Slideshow>
              </div>
            </div>
            <hr/>
            <h1 className="display-6">How to proceed:</h1>
            <div className="mb-5">
              <InstructionsTab instructions={recipeData.instructions}></InstructionsTab>
            </div>
            <hr/>
            <h1 className="display-5">Some last words:</h1>
            <blockquote className="mb-2">
              <p className="quote-text">"{recipeData.summary}"</p>
            </blockquote>
          </div>
        )}
    </>
  );

}

export default Recipe;
