import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IngredientsTab from "./IngredientsTab/IngredientsTab";
import InstructionsTab from "./InstructionsTab/InstructionTab";
import Slideshow from "./Slideshow/Slideshow";
import Error500 from "../Error500/Error500";
import Loader from "../Loader/Loader";
import config from "../../config.json";
import "./style.css";
import bgImage from '../../Assets/explosion.jpg';

function Recipe() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  document.body.style.backgroundImage = `url('${bgImage}')`;
  document.getElementById("root").style.backgroundImage =
  "linear-gradient(to bottom, rgba(170, 213, 142,0.1),rgba(170, 213, 142,0.4))";

  useEffect(() => {
    setIsLoaded(false);
    fetch(config.API_SERVER_URL + "/recipe/GetRecipe?id=" + id, {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": config.API_SUBSCRIPTION_KEY,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      )
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <Error500></Error500>;
  } else if (!isLoaded) {
    return <Loader></Loader>;
  } else {
    return (
      <div className="recipe-wrapper container">
        <h1 className="display-2 mt-2">{data.title}</h1>
        <h1 className="display-6">Ingredients list:</h1>
        <div className="row mt-md-2">
          <div className="col-md-6 mb-4">
            <IngredientsTab ingredients={data.ingredients}></IngredientsTab>
          </div>
          <div className="col-md-6">
            <Slideshow imagedata={data.images}></Slideshow>
          </div>
        </div>
        <hr></hr>
        <h1 className="display-6">How to:</h1>
        <div className="mb-5">
          <InstructionsTab instructions={data.instructions}></InstructionsTab>
        </div>
        <hr></hr>
        <h1 className="display-5">Some last words:</h1>
        <blockquote className="mb-2">
          <p className="quote-text">"{data.summary}"</p>
        </blockquote>
      </div>
    );
  }
}

export default Recipe;
