import React from "react";

function AnimatedWord(props) {
  const charArray = props.children.split("");

  return (
    <>
      {charArray.length > 0 &&
        charArray.map((letter, index) => {
          return (
            <span
              key={index}
              style={{ "--order": index + 1 }}
              className={props.cssClass}
            >
              {letter}
            </span>
          );
        })}
    </>
  );
}

export default AnimatedWord;
