import React from "react";
import InstructionCard from "../InstructionCard/InstructionCard";
import "./style.css";

function InstructionsTab() {
  return (
    <div className="instruction-tab card-group">
      <InstructionCard
        title="Cut Onion"
        description="Cut onion on small cubes."
        step="1"
      ></InstructionCard>
      <InstructionCard
        title="Fry on pan"
        description="Add onion to pan with olive oil. Medium-high temperature."
        step="2"
      ></InstructionCard>
      <InstructionCard
        title="Add Eggs"
        description="Crack all eggs and add them to pan."
        step="3"
      ></InstructionCard>
      <InstructionCard
        title="Salt &#38; pepper"
        description="Season the onion and eggs."
        step="4"
      ></InstructionCard>
      <InstructionCard
        title="Mix the eggs"
        description="Slowly mix the eggs on medium-low temperature for 3 - 5 minutes."
        step="5"
      ></InstructionCard>
    </div>
  );
}

export default InstructionsTab;
