import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";

export default function ServiceSplitCard({ imageUrl, title, description, link = "#", reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} w-full bg-[#FEFEFE]`}>
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide mb-4 text-[#0a0a0a]">
            {title}
          </h3>
          <p className="text-gray-700 text-base mb-8 leading-relaxed">
            {description}
          </p>
          <AnimatedButton as={Link} to={link} variant="inverted">
            Learn More
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
