import React, { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonCardGrid({ people, onCardClick }) {
  const [isHoveredIdx, setIsHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {people.map((person, idx) => {
        const isHovered = isHoveredIdx === idx;
        const showButton = isMobile || isHovered;
        const brightnessClass =
          !isMobile && isHovered ? "brightness-[0.6]" : "";
          const overlayHeight = isMobile
          ? "h-[40%]"
          : isHovered
          ? "h-[40%]"
          : "h-[24%] lg:h-[28%]";


        return (
          <div
            key={idx}
            tabIndex={0}
            onClick={() => onCardClick(person)}
            onKeyDown={(e) => e.key === "Enter" && onCardClick(person)}
            onMouseEnter={() => !isMobile && setIsHoveredIdx(idx)}
            onMouseLeave={() => !isMobile && setIsHoveredIdx(null)}
            className="w-full sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px] aspect-[4/5] relative transform overflow-hidden bg-white shadow-md rounded-none cursor-pointer transition duration-300 outline-none"
          >
            {/* Image */}
            <img
              src={person.imageUrl}
              alt={person.name}
              className={`w-full h-full object-cover transition duration-300 ${brightnessClass}`}
            />

            {/* Animated Overlay */}
            <div
              className={`
                absolute bottom-0 left-0 right-0 bg-white
                transition-all duration-300 ease-in-out
                flex flex-col justify-start ${overlayHeight}
              `}
            >
              <div className="px-4 pt-4 pb-2 text-center flex flex-col gap-y-2">
              <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide text-neutral-900 uppercase font-poppins">
              {person.name}
                </h3>
                <p className="text-[12px] text-[#666] font-medium font-poppins mb-2">
                  {person.title}
                </p>
              </div>

              {/* Button section */}
              <div className="px-4 pb-6 sm:mb-3 w-full flex justify-center">
                <AnimatePresence>
                  {showButton && (
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
                        className="w-full text-sm py-2 px-6"
                      >
                        View Profile
                      </AnimatedButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
