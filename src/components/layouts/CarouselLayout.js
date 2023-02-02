import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container mx-auto">
        <Slider {...settings}>
          <div className="flex">
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 1"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 2"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 3"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 4"
            />
          </div>
          <div className="flex">
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 5"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 6"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 7"
            />
            <img
              className="w-1/4 h-64 object-cover mx-4"
              src="https://via.placeholder.com/400x400"
              alt="Image 8"
            />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;