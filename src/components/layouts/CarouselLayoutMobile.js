import React, { useState } from "react";
import Slider from "react-slick";
import ImageOne from '../../images/Johanna 1.png';
import ImageTwo from '../../images/Katusza 1.png';
import ImageThree from '../../images/Merry 1.png';
import ImageFour from '../../images/Merry 2.png';
import Carousel from 'react-bootstrap'

const CarouselMobile = () => {
    const [slide, setSlide] = useState(true)

    return (
        <div
            id="carouselDarkVariant"
            class="carousel justify-center flex slide carousel-fade" style={{marginTop: "450px"}}
            data-bs-ride="carousel"
        >
            <button type="button" class="z-30 flex items-center justify-center h-full px-4 mt-16 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => setSlide(p => !p)}>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
            <div className="flex w-4/5">
                {slide && 
                <>
                <div className="w-1/2 px-2">
                    <img src={ImageOne} alt="Image 1" className="h-129 w-full object-cover" />
                </div>
                <div className="w-1/2 px-2">
                    <img src={ImageTwo} alt="Image 2" className="h-129 w-full object-cover" />
                </div>
                </>}
                {!slide && 
                <>
                <div className="w-1/2 px-2">
                    <img src={ImageThree} alt="Image 3" className="h-129 w-full object-cover" />
                </div>
                <div className="w-1/2 px-2">
                    <img src={ImageFour} alt="Image 4" className="h-129 w-full object-cover" />
                </div>
                </>}
            
            </div>
            
                <button type="button" class="flex items-center justify-center h-full px-4 mt-16 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => setSlide(p => !p)}>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
        </div>
    );

};

export default CarouselMobile;