import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import './Slider.css';
// import styles from '../styles/slider.css';

const Carousel = ({slides, customStylesForSlides, mainCustomStylesForSliderContainer}) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container" className={mainCustomStylesForSliderContainer}>
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideRight}
      />
      <div id="slider">
        {slides.map((slide, index) => (
          <div className={`slider-card ${customStylesForSlides}`} key={index} onClick={() => slide.clickEvent()}>
            <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover',}}></div>
            <p className="slider-card-title">{slide.title}</p>
            <p className="slider-card-description">{slide.description}</p>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideLeft}
      />
    </div>
  );
}

export default Carousel