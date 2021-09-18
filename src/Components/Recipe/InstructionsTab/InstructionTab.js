import React from "react";
import InstructionCard from "../InstructionCard/InstructionCard";
import "./style.css";

function InstructionsTab(props) {

  const colorArraySize = props.instructions.length;

  let colorArray = [];
  let offset = 80 / colorArraySize;

  const defaultGreen = 252;
  const redBlueStart = 230;
  
  
  for(let i = 0; i < colorArraySize; i++){
    let redBlue = redBlueStart - ((i + 1) * offset);

    colorArray[i] = {
      r:redBlue,
      g:defaultGreen,
      b:redBlue
    }
  }

  return (
    <div className="instruction-tab card-group">
      {props.instructions.map((instruction, index) => {
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
