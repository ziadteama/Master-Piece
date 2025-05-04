import React, { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, imageUrl, categories, showButton }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showOverlayHeight = isMobile ? "h-[35%]" : isHovered ? "h-[40%]" : "h-[20%]";
  const imageBrightness = !isMobile && isHovered ? "brightness-[0.6]" : "";

  return (
    <div
      className="w-full sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px] aspect-[4/5] relative transform overflow-hidden bg-white shadow-md rounded-none"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-full object-cover transition duration-300 ${imageBrightness}`}
      />

      {/* Overlay section */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 
          bg-white 
          ${showOverlayHeight}
          transition-all duration-300 ease-in-out
          flex flex-col justify-start
        `}
      >
        {/* Text and labels */}
        <div className="px-4 pt-4 pb-2 text-center flex flex-col gap-y-2">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium sm:font-semibold tracking-wide sm:tracking-normal text-neutral-900 uppercase font-poppins">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1 justify-center">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] md:text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium tracking-tight font-poppins"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Button area */}
        <div className="px-4  sm:pb-1 w-full flex justify-center">
        {showButton && (
            <>
              {/* Mobile: always show */}
              {isMobile ? (
                <AnimatedButton
                  variant="inverted"
                  className="w-full text-sm py-4 px-10"
                >
                  View Project
                </AnimatedButton>
              ) : (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key="button"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <AnimatedButton
                        variant="inverted"
                        className="w-full text-sm py-4 px-10"
                      >
                        View Project
                      </AnimatedButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
