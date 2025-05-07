import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";

export default function ServiceSplitCard({
  imageUrl,
  title,
  description,
  link = "#",
  reverse = false,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} w-full bg-[#FEFEFE] overflow-hidden shadow-sm min-h-[500px]`}
    >
      {/* Fixed Image Section, vertically centered */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-[500px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fixed Text Section, vertically centered */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-[500px]">
        <div className="max-w-lg text-center lg:text-left px-6 lg:px-12">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide mb-4 text-[#0a0a0a]">
            {title}
          </h3>
          <p className="text-gray-700 text-base mb-8 leading-relaxed">
            {description}
          </p>
          {/* <AnimatedButton as={Link} to={link} variant="inverted">
            Learn More
          </AnimatedButton> */}
          <AnimatedButton  variant="inverted">
            Learn More
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
}
