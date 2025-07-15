'use client';

import React, { useState, useEffect, useCallback } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    buttonText1: "Buy now",
    buttonText2: "Find more",
    imgSrc: assets.header_headphone_image,
  },
  {
    id: 2,
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Hurry up only few lefts!",
    buttonText1: "Shop Now",
    buttonText2: "Explore Deals",
    imgSrc: assets.header_playstation_image,
  },
  {
    id: 3,
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    offer: "Exclusive Deal 40% Off",
    buttonText1: "Order Now",
    buttonText2: "Learn More",
    imgSrc: assets.header_macbook_image,
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-blue-100 py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-blue-800 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold text-blue-900">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button
                 className="md:px-10 px-7 md:py-2.5 py-2 bg-blue-800 hover:bg-blue-900 transition-colors duration-200 rounded-full text-blue-50 font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <ArrowRight className="w-5 h-5 text-blue-900 " />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide image: ${slide.title}`}
                width={400}
                height={300}
                priority={index === currentSlide} // Prioriza la imagen actual para mejor UX
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-blue-800" : "bg-blue-400/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
