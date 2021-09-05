import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import './style.css'

function Slideshow(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slideshow p-2">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.imagedata.map((image) => {
          return(
            <Carousel.Item key={image.alt}>
              <img
                className="d-block w-100"
                src={image.source}
                alt={image.alt}
                width="600"
                height="400"
              ></img>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slideshow;
