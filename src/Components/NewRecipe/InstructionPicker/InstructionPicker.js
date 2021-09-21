import React, { useState, useEffect } from "react";
import InstructionData from "./InstructionData/InstructionData";
import "./style.css";

function InstructionPicker(props) {
  const instructionGroups = [];

  const [insArray, setInsArray] = useState([]);
  const { sendToRecipe } = props;

  useEffect(() => {
    sendToRecipe(insArray);
  }, [insArray, sendToRecipe]);

  const sendInsToArray = (ins) => {
    setInsArray((old) => [...old, ins]);
  };

  for (let i = 0; i < props.counter; i++) {
    instructionGroups.push(
      <InstructionData
        key={i}
        index={i}
        handleAdd={sendInsToArray}
      ></InstructionData>
    );
  }

  return <>{instructionGroups}</>;
}

export default InstructionPicker;
