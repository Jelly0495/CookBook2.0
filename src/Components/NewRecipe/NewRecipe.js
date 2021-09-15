import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import IngredientPicker from "./IngridientPicker/IngridientPicker";
import InstructionPicker from "./InstructionPicker/InstructionPicker";
import config from "../../config.json";
import axios from "axios";
import "./style.css";

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

  const sendIngredientsToRecipe = (ingredientArray) => {
    setIngredients(ingredientArray);
  };

  const sendInstructionsToRecipe = (instructionArray) => {
    setInstructions(instructionArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let images = [
      {"source" : config.SLIDESHOW_DEFAULT_1, "alt" : "Default image 1"},
      {"source" : config.SLIDESHOW_DEFAULT_2, "alt" : "Default image 2"},
      {"source" : config.SLIDESHOW_DEFAULT_3, "alt" : "Default image 3"}
    ];

    // if (!isChecked) {
    //   images = selectedFiles;
    // }

    let formData = {
      title: title,
      summary: description,
      ingredients: ingredients,
      instructions: instructions,
      images: images,
    };

    let postUrl = config.API_SERVER_URL + "/recipe/AddRecipe";
    const headers = {
      'Content-Type': 'application/json',
      "Ocp-Apim-Subscription-Key": config.API_SUBSCRIPTION_KEY
    }
    
    axios
      .post(postUrl, {
        recipe: formData,
      }, {
        headers: headers
      })
      .then((response) => {
        console.log(response.data);
      });

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
