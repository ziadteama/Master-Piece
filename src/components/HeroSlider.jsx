import { useEffect, useRef, useState } from "react";

const slides = [
    "/src/assets/images/hero-bg-1.png",
    "/src/assets/images/hero-bg-2.png",
    "/src/assets/images/hero-bg-3.png",
    "/src/assets/images/hero-bg-4.png",
  ];
  
  const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
  
    const transitionTo = (index) => {
      if (index === current) return;
      setCurrent(index);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    };
  
    useEffect(() => {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
  
      return () => clearTimeout(timeoutRef.current);
    }, [current]);
  
    return (
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {slides.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
  
        <div className="absolute top-[44vh] left-0 z-30 text-white w-full">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-full sm:max-w-[700px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-0.5 bg-primary"></span>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-poppins uppercase tracking-[0.03em] font-bold text-white/90">
                  Masterpiece Contractors
                </span>
              </div>
  
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-chillax uppercase tracking-tight leading-[1.4] max-w-[90vw] sm:max-w-[80vw] md:max-w-[55vw]">
                Building With Precision and Integrity & Managing Properties
              </h1>
            </div>
          </div>
        </div>
  
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3 pr-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => transitionTo(i)}
              className={`transition-all duration-300 cursor-pointer bg-white origin-right ${
                current === i
                  ? "w-12 h-[2px] opacity-100"
                  : "w-6 h-[2px] opacity-40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

export default HeroSlider;
