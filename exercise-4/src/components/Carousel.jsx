import React from 'react';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [crrImgIndex, setCrrImgIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
  function handleClickLeft() {
    setCrrImgIndex((prev) => prev == 0 ? images.length - 1 : prev - 1);
  }
  function handleClickRight() {
    setCrrImgIndex((prev) => (prev == images.length - 1 ? 0 : prev + 1));
  }
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handleClickLeft}
      />

      {/* YOu will need to display the current image, not the first one.. */}
      <img
        src={images[crrImgIndex].src}
        alt={images[crrImgIndex].alt}
        className="slide"
      />

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleClickRight}
      />
    </div>
  );
};
