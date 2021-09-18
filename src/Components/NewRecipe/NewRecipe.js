import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import IngredientPicker from "./IngridientPicker/IngridientPicker";
import InstructionPicker from "./InstructionPicker/InstructionPicker";
import axios from "axios";
import { v5 as uuidv5 } from "uuid";
import { v4 as uuidv4 } from "uuid";
import config from "../../config.json";
import "./style.css";
import bgImage from "../../Assets/bg-2.jpg";

function NewRecipe() {
  const [isChecked, setIsChecked] = useState(false);
  const [IngredientCounter, setIngredientCounter] = useState(1);
  const [instructionCounter, setInstructionCounter] = useState(1);

  //FormData
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null);

  let history = useHistory();

  document.body.style.backgroundImage = `url('${bgImage}')`;
  document.getElementById("root").style.backgroundImage =
    "linear-gradient(rgb(170 213 142 / 45%), rgb(116 173 90 / 70%))";

  const sendIngredientsToRecipe = (ingredientArray) => {
    setIngredients(ingredientArray);
  };

  const sendInstructionsToRecipe = (instructionArray) => {
    setInstructions(instructionArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let images = [];
    let imageNames = [];
    if (isChecked) {
      images = [
        {
          source: `${config.SLIDESHOW_DEFAULT_1}?${config.IMAGE_CONTAINER_SAS}`,
          alt: "Default image 1",
        },
        {
          source: `${config.SLIDESHOW_DEFAULT_2}?${config.IMAGE_CONTAINER_SAS}`,
          alt: "Default image 2",
        },
        {
          source: `${config.SLIDESHOW_DEFAULT_3}?${config.IMAGE_CONTAINER_SAS}`,
          alt: "Default image 3",
        },
      ];
    } else {
      for (let i = 0; i < selectedFiles.length; i++) {
        var newName = uuidv5(selectedFiles[i].name, uuidv4());
        imageNames.push(newName);
        images.push({
          source: `${config.CONTAINER_URI}/${newName}?${config.IMAGE_CONTAINER_SAS}`,
          alt: `Image ${newName}`,
        });
      }
    }

    let formData = {
      title: title,
      summary: description,
      ingredients: ingredients,
      instructions: instructions,
      images: images,
    };
    let promises = [];

    if (!isChecked) {
      let postImageUrl = config.API_SERVER_URL + "/recipe/UploadImage";
      for (let i = 0; i < selectedFiles.length; i++) {
        let data = new FormData();
        let file = new File([selectedFiles[i]], imageNames[i], {
          type: "multipart/form-data",
        });
        let url = `${postImageUrl}?filename=${imageNames[i]}`;
        data.append(`file${i}`, file);

        let header = {
          "Content-Type": "multipart/form-data",
          "Ocp-Apim-Subscription-Key": config.API_SUBSCRIPTION_KEY,
        };
        promises.push(
          axios.post(url, data, { headers: header }).then((response) => {
            console.log(response);
          })
        );
      }
    }

    let postUrl = config.API_SERVER_URL + "/recipe/AddRecipe";
    const headers = {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": config.API_SUBSCRIPTION_KEY,
    };

    promises.push(
      axios
        .post(postUrl, { recipe: formData }, { headers: headers })
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) {
            history.push("/");
          }
        })
    );

    Promise.all(promises);
  };

  return (
    <div className="container new-recipe mt-4">
      <h1 className="col-md-12 display-5">
        <span className="yellow display-1 letter-hop">C</span>
        <span className="yellow display-1 letter-hop2">R</span>
        <span className="yellow display-1 letter-hop3">E</span>
        <span className="yellow display-1 letter-hop4">A</span>
        <span className="yellow display-1 letter-hop5">T</span>
        <span className="yellow display-1 letter-hop6">E</span> your new{" "}
        <span className="yellow">recipe</span>!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h1 className="col-md-12">1. upload images</h1>
          <Form.Group controlId="recipeImagesInput" className="col-md-4 mb-3">
            <Form.Label>
              <strong>Choose your recipe images :</strong>
            </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setSelectedFiles(e.target.files)}
              multiple
              required={!isChecked}
              disabled={isChecked}
            />
          </Form.Group>
          <div className="col-md-12">
            <Form.Check
              type="checkbox"
              id="images-checkbox"
              label="Dont upload images"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <h1 className="col-md-12">2. About recipe</h1>
          <div className="col-md-6">
            <Form.Group controlId="recipeTitleInput">
              <Form.Label>
                <strong>Give your recipe some catchy title :</strong>
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Recipe title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="recipeDescriptionInput">
              <Form.Label>
                <strong>
                  Summarize your thoughts about this recipe in few words :
                </strong>
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Recipe description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="row">
          <h1 className="col-md-12">3. What do you need </h1>
          <div className="col-md">
            <Button
              variant="primary"
              onClick={() => {
                setIngredientCounter(IngredientCounter + 1);
              }}
            >
              Add Ingredient
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                let cnt = IngredientCounter === 0 ? 0 : IngredientCounter - 1;
                setIngredientCounter(cnt);
                ingredients.pop();
                setIngredients(ingredients);
              }}
            >
              Delete Ingredient
            </Button>{" "}
          </div>
          <IngredientPicker
            counter={IngredientCounter}
            sendToRecipe={sendIngredientsToRecipe}
          ></IngredientPicker>
        </div>
        <hr></hr>
        <div className="row">
          <h1 className="col-md-12">4. How to do</h1>
          <div className="col-md">
            <Button
              variant="primary"
              onClick={() => {
                setInstructionCounter(instructionCounter + 1);
              }}
            >
              Add Step
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                let cnt = instructionCounter === 0 ? 0 : instructionCounter - 1;
                setInstructionCounter(cnt);
                instructions.pop();
                setIngredients(instructions);
              }}
            >
              Delete Step
            </Button>{" "}
          </div>
          <InstructionPicker
            counter={instructionCounter}
            sendToRecipe={sendInstructionsToRecipe}
          ></InstructionPicker>
        </div>
        <div className="mb-3 mt-3 text-center col-md-12">
          <Button
            className="col-md-2"
            variant="secondary"
            type="submit"
            size="lg"
          >
            Submit recipe
          </Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default NewRecipe;