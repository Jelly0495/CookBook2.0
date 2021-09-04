import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import './style.css'

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slideshow p-2">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.aktuality.sk/foto/Zml0LWluLzEyMDB4MC9maWx0ZXJzOndhdGVybWFyayhodHRwOi8vbG9jYWxob3N0OjgxL2ltZy9kY2gxLC0xMCwtMTAsNTApL2ltZw==/tXTBHrNOQIXZKIkc7mZegA.jpg?st=g6AKcf3A8sKNxzpEPd62s8xio4TwSj_mTGnWtpsk5d8&ts=1533278912&e=0"
            alt="First slide"
            width="600"
            height="400"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://krajpotravin.sk/content/zivot-bez-obmedzeni/6-blog-podcasty/22-kedj-nam-zivot-skomplikuje-alergia-na-slepacie-vajce/eggs_1.jpg"
            alt="Second slide"
            width="600"
            height="400"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encyklopedia.akv.sk/wp-content/uploads/2018/08/FotkyFoto_39237341_S.jpg"
            alt="Third slide"
            width="600"
            height="400"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
