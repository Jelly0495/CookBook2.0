import React from "react";
import { Form } from "react-bootstrap";
import './style.css'

function IngredientPicker(props) {
  const ingredientGroups = [];

  console.log(props.counter);
  for (let i = 0; i < props.counter; i++) {
    let idCounter = i + 1;
    ingredientGroups.push(
      <div key={i} className="row mb-3 ingredient-picker">
        <div className="col-md-3">
          <Form.Group controlId={"IngredientTitle" + idCounter}>
            <Form.Label>
              <strong>#{i + 1} Ingredient name :</strong>
            </Form.Label>
            <Form.Control placeholder="Title" />
          </Form.Group>
        </div>
        <div className="col-md-2">
          <Form.Group controlId={"IngredientAmmount" + idCounter}>
            <Form.Label>
              <strong>Ammount :</strong>
            </Form.Label>
            <Form.Control placeholder="Ammount" />
          </Form.Group>
        </div>
        <div className="col-md-1">
          <Form.Label>
            <strong>Unit :</strong>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option key="0">Unit</option>
            <option key="1" value="1">g</option>
            <option key="2" value="2">kg</option>
            <option key="3" value="3">l</option>
            <option key="4" value="4">ks</option>
            <option key="5" value="5">PL</option>
            <option key="6" value="6">ČL</option>
          </Form.Select>
        </div>
        <div className="col-md-6">
          <Form.Group controlId={"IngredientDescription" + idCounter}>
            <Form.Label>
              <strong>Ingredient description :</strong>
            </Form.Label>
            <Form.Control as="textarea" placeholder="Description" />
          </Form.Group>
        </div>
      </div>
    );
  }

  return <>{ingredientGroups}</>;
}

export default IngredientPicker;
