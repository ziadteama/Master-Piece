import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, imageUrl, categories, showButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] aspect-[18/20] relative transform overflow-hidden bg-white shadow-md rounded"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-full object-cover transition duration-300 ${
          isHovered ? "brightness-[0.6]" : ""
        }`}
      />

      {/* Expanding white overlay */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 
          bg-white 
          ${isHovered ? "h-[38%]" : "h-[20%]"}
          transition-all duration-300 ease-in-out
          flex flex-col justify-between
        `}
      >
        {/* Text and labels */}
        <div className="px-4 pt-4 pb-4 text-center">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium sm:font-semibold tracking-wide sm:tracking-normal text-neutral-900 uppercase font-poppins">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1 justify-center pt-2 ">
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

        {/* Button */}
        <AnimatePresence>
          {isHovered && showButton && (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="px-8 pb-4 w-full flex justify-center"
            >
              <AnimatedButton
                variant="inverted"
                className="w-full text-md py-4 px-4"
              >
                View Project
              </AnimatedButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
