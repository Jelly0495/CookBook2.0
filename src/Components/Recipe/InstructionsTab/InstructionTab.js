import React from "react";
import InstructionCard from "../InstructionCard/InstructionCard";
import "./style.css";

const OFFSET_RGB_RANGE = 80;
const RGB_START = {r: 230, g: 252, b: 230};

function InstructionsTab(props) {
  const offsetCount = props.instructions.length - 1;
  const offset = OFFSET_RGB_RANGE / offsetCount;
  const colorArray =  props.instructions.map((key, index) => {
    return({
      r: RGB_START.r - (index * offset),
      g: RGB_START.g,
      b: RGB_START.b - (index * offset)
    });
  });

  return (
    <div className="instruction-tab card-group">
      {props.instructions && props.instructions.map((instruction, index) => {
        return (
          <InstructionCard
            key={instruction.step}
            title={instruction.title}
            description={instruction.description}
            step={instruction.step}
            clrArray={colorArray[index]}
          ></InstructionCard>
        );
      })}
    </div>
  );
}

export default InstructionsTab;
