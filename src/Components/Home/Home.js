import { React, useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./style.css";
import config from "../../config.json";
import Error500 from "../Error500/Error500";
import Loader from "../Loader/Loader";

var options = [];

const CustomStyle = {
  control: (styles) => ({ ...styles, backgroundColor: "#F6FBF2" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#F8D780" : "#F6FBF2",
    color: "#41493B",
  }),
};

const setOptions = function (data) {
  for (let i = 0; i < data.recipes.length; i++) {
    options[i] = { value: data.recipes[i].id, label: data.recipes[i].name };
  }
};

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  useEffect(() => {
    fetch(config.API_SERVER_URL + "/recipe/GetRecipes", {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": config.API_SUBSCRIPTION_KEY,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setOptions(result);
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
      <div className="container home">
        <div className="row">
          <p className="home-text col-md-6 text-left">
            What <span className="yellow shaky2">do</span> you
            <br />
            <span className="yellow">want</span> to
            <br />
            cook<span className="yellow shaky3">?</span>
            <br />
          </p>
          <div className="home-dropdown col-md-6">
            <Select
              styles={CustomStyle}
              options={options}
              onChange={handleChange}
            ></Select>
            {selectedValue == 0 ? (
              <button
                className="btn btn-secondary btn-lg mt-3 shaky"
                type="button"
                disabled
              >
                <span className="button-link">Select recipe</span>
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-lg mt-3 shaky"
                type="button"
              >
                <Link className="button-link" to={"/recipe/" + selectedValue}>
                  Go to...
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
