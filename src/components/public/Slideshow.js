import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./SlideShow.css";

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slide">
      <img src={pictures[currentImageIndex]} alt="Property" />
      <div className="arrow-icons">
        <FontAwesomeIcon
          className="fa-chevron-left"
          icon={faChevronLeft}
          size="2xl"
          onClick={previousImage}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
        <FontAwesomeIcon
          className="fa-chevron-right"
          icon={faChevronRight}
          onClick={nextImage}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>
      <div className="image-indicator">
        {currentImageIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Slideshow;
