import { useState, useRef, useEffect, useCallback } from 'react';
import { Modal } from './Modal';

// Data
const data = [131,169,152,154,256,204,348,328,159,195,202,120,267,251,252,11,23,319,189,164,341,321,137,424,66,170,50,63,279]

export const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [modalUrl, setModalUrl] = useState("");

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = useCallback(() => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }, [currentIndex]);

  

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    console.log("useEffect currentIndex")
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    console.log("useEffect nodeps")
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const [carouselInterval, setCarouselInterval] = useState(false);

  useEffect(() => {
    
    setCarouselInterval(true);
    if(!carouselInterval){
      setInterval(()=>{
        console.log("Moving")
        if(carousel.current !== null){
        carousel.current.scrollLeft = carousel.current.scrollLeft > maxScrollWidth.current ? 0 : carousel.current.scrollLeft + 100;
        console.log(carousel.current.scrollLeft)
        }

      }, 3500)
    }
    
  }, [carousel, carouselInterval])

  return (
    <div className="carousel mt-[450px] lg:mt-3 mx-auto justify-center w-4/5" >
      <div className="relative overflow-hidden"  >
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-zinc-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-zinc-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          
        >
          {data.map((resource, index) => {
            const composite_src=`https://d331ancnbhe3hg.cloudfront.net/previews/${resource*1000 + 1}.webp`
            const video_src=`https://d331ancnbhe3hg.cloudfront.net/previews/${resource*1000 + 1}.webm`

            return (
              <>
              <div
                key={index}
                className="carousel-item cursor-zoom-in text-center relative w-48 h-48 snap-start"
                onClick={()=>{setModalUrl(video_src); console.log("clicked")}}
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${composite_src || ''})` }}
                >
                  <img
                    src={composite_src || ''}
                    alt="Order of Ink Preview"
                    className="w-full aspect-square hidden"
                  />
                </a>
                
              </div>
              
              </>
            );
          })}
          <Modal url={modalUrl} setUrl={setModalUrl} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
