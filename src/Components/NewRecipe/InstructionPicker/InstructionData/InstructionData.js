import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style.css";

function InstructionData(props) {
  const idCounter = props.index + 1;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = () => {
    const obj = {
      title: title,
      description: description,
      step: idCounter,
    };
    props.handleAdd(obj);
    setDisabled(!disabled);
  };

  return (
    <div key={props.index} className="mb-3 instruction-picker">
      <div className="row">
        <div className="row col-md-8 mx-auto">
          <div className="col-md-6">
            <Form.Group controlId={"InstructionTitle" + idCounter}>
              <Form.Label>
                <strong>#{idCounter} Step title :</strong>
              </Form.Label>
              <Form.Control
                required
                disabled={disabled}
                onChange={handleTitleChange}
                placeholder="Title"
                as="textarea"
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId={"InstructionDescription" + idCounter}>
              <Form.Label>
                <strong>Step Description :</strong>
              </Form.Label>
              <Form.Control
                required
                onChange={handleDescriptionChange}
                as="textarea"
                placeholder="Description"
                disabled={disabled}
              />
            </Form.Group>
          </div>
        </div>
      </div>
      <div className="col-md-2 mx-auto mt-3 text-center">
        <Form.Group className="d-grid">
          <Form.Label>
            <strong>Instruction lock :</strong>
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

export default InstructionData;
