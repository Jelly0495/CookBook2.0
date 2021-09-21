import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { v5 as uuidv5 } from "uuid";
import { v4 as uuidv4 } from "uuid";

import bgImage from "Assets/abstract.jpg";
import config from "config.json";

import AnimatedWord from "./AnimatedWord/AnimatedWord";
import IngredientPicker from "./IngridientPicker/IngridientPicker";
import InstructionPicker from "./InstructionPicker/InstructionPicker";
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
  const [adminKey, setAdminKey] = useState("");

  let history = useHistory();

  document.body.style.backgroundImage = `url('${bgImage}')`;

  const sendIngredientsToRecipe = (ingredientArray) => {
    setIngredients(ingredientArray);
  };

  const sendInstructionsToRecipe = (instructionArray) => {
    setInstructions(instructionArray);
  };

  const handleAddIngredient = () => {
    setIngredientCounter(IngredientCounter + 1);
  };
  const handleDeleteIngredient = () => {
    let cnt = IngredientCounter === 0 ? 0 : IngredientCounter - 1;
    setIngredientCounter(cnt);
    ingredients.pop();
    setIngredients(ingredients);
  };
  const handleAddInstructions = () => {
    setInstructionCounter(instructionCounter + 1);
  };
  const handleDeleteInstructions = () => {
    let cnt = instructionCounter === 0 ? 0 : instructionCounter - 1;
    setInstructionCounter(cnt);
    instructions.pop();
    setInstructions(instructions);
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
      adminKey: adminKey
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
          axios.post(url, data, { headers: header })
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
          if (response.status === 200) {
            history.push("/");
          }
        })
    );

    Promise.all(promises);
  };

  return (
    <div className="container new-recipe mt-4">
      <h1 className="col-md-12 text-center">
        <AnimatedWord cssClass="letter-hop">create</AnimatedWord>
        <br />
        your new recipe !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 mb-5">
          <h1 className="col-md-12 text-center">1. upload images <i className="fas fa-images"></i></h1>
          <Form.Group controlId="recipeImagesInput" className="col-md-4 mb-3 mx-auto text-center">
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
          <div className="row">
          <div className="col-md-2 mx-auto">
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
        </div>
        <hr />
        <div className="row mt-5 mb-5">
          <h1 className="col-md-12 text-center mb-4">2. About recipe <i className="fas fa-info-circle"></i></h1>
          <div className="col-md-6 text-center">
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
          <div className="col-md-6 text-center">
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
        <div className="row mt-5 mb-5">
          <h1 className="col-md-12 text-center">3. What do you need <i className="fas fa-list"></i></h1>
          <div className="col-md text-center mb-4">
            <Button variant="primary" onClick={handleAddIngredient}>
              Add Ingredient
            </Button>{" "}
            <Button variant="danger" onClick={handleDeleteIngredient}>
              Delete Ingredient
            </Button>{" "}
          </div>
          <IngredientPicker
            counter={IngredientCounter}
            sendToRecipe={sendIngredientsToRecipe}
          ></IngredientPicker>
        </div>
        <hr></hr>
        <div className="row mt-5 mb-5">
          <h1 className="col-md-12 text-center">4. How to do <i className="fas fa-angle-double-right"></i></h1>
          <div className="col-md text-center">
            <Button variant="primary" onClick={handleAddInstructions}>
              Add Step
            </Button>{" "}
            <Button variant="danger" onClick={handleDeleteInstructions}>
              Delete Step
            </Button>{" "}
          </div>
          <InstructionPicker
            counter={instructionCounter}
            sendToRecipe={sendInstructionsToRecipe}
          ></InstructionPicker>
        </div>
        <div className="row mt-5 mb-5">
          <h1 className="col-md-12 text-center">5. Administrator key <i className="fas fa-key"></i></h1>
          <Form.Group controlId="AdministratorKey" className="mt-1 col-md-4 mx-auto">
            <Form.Control
              required
              type="password"
              placeholder="Key"
              onChange={(e) => {setAdminKey(e.target.value)}}
            />
          </Form.Group>
        </div>
        <div className="mb-5 text-center col-md">
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
