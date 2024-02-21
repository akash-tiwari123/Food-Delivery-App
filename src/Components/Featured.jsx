import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import {RxDotFilled} from 'react-icons/rx'
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isFirstSlide = currentIndex === sliders.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlider = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1520px] h-[700px] w-full py-40 px-4 relative group ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>

      {/* this is for dot */}

      <div className="flex top-8 justify-center py-2 text-b">
            {sliders.map((sliderItems, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => moveToNextSlider(slideIndex)}
                className={`text-2xl cursor-pointer ${
                slideIndex === currentIndex ? "text-orange-700" : "text-black"
                }`}
            >
                <RxDotFilled />
            </div>
            ))}
      </div>
    </div>
  );
};

export default Featured;
