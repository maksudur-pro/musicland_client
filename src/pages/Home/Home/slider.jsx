import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowLeft } from "react-icons/fa";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1568153354382-6bcd1d46568b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1568153354382-6bcd1d46568b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1568153354382-6bcd1d46568b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } w-screen h-64 md:h-80 lg:h-96`}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2  px-4 py-2 rounded-l"
        onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 rounded-r"
        onClick={nextSlide}>
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default Slider;
