import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import IngredientPicker from "./IngridientPicker/IngridientPicker";
import "./style.css";

function NewRecipe() {
  const [isChecked, setIsChecked] = useState(false);
  const [IngredientCounter, setIngredientCounter] = useState(3);

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
      <form>
        <div className="row">
          <h1 className="col-md-12">1. upload images</h1>
          <Form.Group controlId="recipeImagesInput" className="col-md-4 mb-3">
            <Form.Label>
              <strong>Choose your recipe images :</strong>
            </Form.Label>
            <Form.Control type="file" multiple disabled={isChecked} />
          </Form.Group>
          <div className="col-md-12">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
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
              <Form.Control as="textarea" placeholder="Recipe title" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="recipeDescriptionInput">
              <Form.Label>
                <strong>
                  Summarize your thoughts about this recipe in few words :
                </strong>
              </Form.Label>
              <Form.Control as="textarea" placeholder="Recipe description" />
            </Form.Group>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="row">
          <h1 className="col-md-3">3. What do you need</h1>
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
              }}
            >
              Delete Ingredient
            </Button>{" "}
          </div>
          <IngredientPicker counter={IngredientCounter}></IngredientPicker>
        </div>
      </form>
    </div>
  );
}

export default NewRecipe;
