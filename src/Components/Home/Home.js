import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import bgImage from "Assets/explosion.jpg";
import Loader from "Components/Loader/Loader";
import Maintenance from "Components/Maintenance/Maintenance";
import config from "config.json";

import LandingText from "./LandingText/LandingText";
import "./style.css";

const selectStyle = {
  control: (styles) => ({ ...styles, backgroundColor: "#F6FBF2" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#F8D780" : "#F6FBF2",
    color: "#41493B",
  }),
};

function Home() {
  const [apiRecipeData, setApiRecipeData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectOptions, setSelectOptions] = useState([]);

  document.body.style.backgroundImage = `url('${bgImage}')`;
  
  const handleSelectChange = (e) => {
    setSelectedRecipe(e.value);
  };

  useEffect(() => {
    const headers = {"Ocp-Apim-Subscription-Key" : config.API_SUBSCRIPTION_KEY};
    const recipesApiUrl = `${config.API_SERVER_URL}/recipe/GetRecipes`;

    axios.get(recipesApiUrl, { headers: headers })
    .then((result) => {
      setApiRecipeData(result.data.recipes);
      setIsLoaded(true);
    })
    .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if(apiRecipeData){
      const selectOptions = apiRecipeData.map((option) => {
        return { value: option.id, label: option.name };
      });
      setSelectOptions(selectOptions);
    }
  }, [apiRecipeData]);

  return (
    <>
      {error && <Maintenance />}
      {!isLoaded && <Loader />}
      {isLoaded && (
        <div className="container home">
          <div className="row">
            <div className="home-text col-md-6 text-left">
              <LandingText />
            </div>
            <div className="home-dropdown col-md-6">
              <Select
                styles={selectStyle}
                options={selectOptions}
                onChange={handleSelectChange}
              />
              <button className="btn btn-secondary btn-lg mt-3 shaky" disabled={!selectedRecipe}>
                {selectedRecipe 
                  ? <Link className="button-link" to={`/recipe/${selectedRecipe}`}>Go to recipe...</Link>
                  : <span className="button-link">Select recipe</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;