import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style.css";

function IngredientData(props) {
  const idCounter = props.index + 1;

  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    const obj = {
      title: title,
      ammount: `${ammount}-${unit}`,
      description: description,
    };
    props.handleAdd(obj);
    setDisabled(!disabled);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmmountChange = (e) => {
    setAmmount(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div key={props.index} className="mt-5 mb-1 ingredient-picker ">
      <div className="row">
        <div className="row col-md-8 mx-auto">
          <div className="col-md-5">
            <Form.Group controlId={"IngredientTitle" + idCounter}>
              <Form.Label>
                <strong>#{idCounter} Ingredient name :</strong>
              </Form.Label>
              <Form.Control
                required
                placeholder="Title"
                onChange={handleTitleChange}
                disabled={disabled}
              />
            </Form.Group>
          </div>
          <div className="col-md-5">
            <Form.Group controlId={"IngredientAmmount" + idCounter}>
              <Form.Label>
                <strong>Ammount :</strong>
              </Form.Label>
              <Form.Control
                required
                placeholder="Ammount"
                onChange={handleAmmountChange}
                disabled={disabled}
              />
            </Form.Group>
          </div>
          <div className="col-md-2">
            <Form.Label>
              <strong>Unit :</strong>
            </Form.Label>
            <Form.Select
              required
              aria-label="Default select example"
              onChange={handleUnitChange}
              disabled={disabled}
            >
              <option key="1" value="g">
                g
              </option>
              <option key="2" value="kg">
                kg
              </option>
              <option key="3" value="l">
                l
              </option>
              <option key="4" value="ks">
                ks
              </option>
              <option key="5" value="PL">
                PL
              </option>
              <option key="6" value="ČL">
                ČL
              </option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row col-md-8 mx-auto">
          <Form.Group controlId={"IngredientDescription" + idCounter}>
            <Form.Label>
              <strong>Ingredient description :</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              onChange={handleDescriptionChange}
              disabled={disabled}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row col-md-2 mx-auto text-center mt-3">
        <Form.Group className="d-grid">
          <Form.Label>
            <strong>Ingredient lock :</strong>
          </Form.Label>
          <Button
            variant="success"
            onClick={handleClick}
            disabled={disabled}
            className="lockbutton"
          >
            {disabled === true ? (
              <i className="fas fa-lock"></i>
            ) : (
              <i className="fas fa-lock-open"></i>
            )}
          </Button>{" "}
        </Form.Group>
      </div>
    </div>
  );
}

export default IngredientData;
