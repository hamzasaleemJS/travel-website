import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1617137210872-d15faddcebb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tetti Yana",
    },
    {
      url: "https://images.unsplash.com/photo-1522933001375-72d29575cf05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Crunchi",
    },
    {
      url: "https://images.unsplash.com/photo-1609768735025-ebb11f2217d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fruits",
    },
    {
      url: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Burger",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.legnth - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 
      group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 
      group-hover:bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
