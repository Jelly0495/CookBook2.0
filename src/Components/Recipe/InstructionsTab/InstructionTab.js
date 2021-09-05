import React from "react";
import InstructionCard from "../InstructionCard/InstructionCard";
import "./style.css";

function InstructionsTab(props) {
  return (
    <div className="instruction-tab card-group">
      {props.instructions.map((instruction) => {
        return (
          <InstructionCard
            key={instruction.step}
            title={instruction.title}
            description={instruction.description}
            step={instruction.step}
          ></InstructionCard>
        );
      })}
    </div>
  );
}

export default InstructionsTab;
