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
        const showDetails = isMobile || isHovered;
        const brightnessClass = !isMobile && isHovered ? "brightness-[0.6]" : "";

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
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 right-0 origin-bottom bg-white px-4 text-center flex flex-col gap-y-2 pt-5 pb-6"
                >
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide text-neutral-900 uppercase font-poppins">
                    {person.name}
                  </h3>
                  <p className="text-[12px] text-[#666] font-medium font-poppins mb-2">
                    {person.title}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                    className="w-full"
                  >
                    <AnimatedButton
                      variant="inverted"
                      className="w-full text-sm py-2 px-6"
                    >
                      View Profile
                    </AnimatedButton>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
