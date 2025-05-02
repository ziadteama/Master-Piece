import { motion } from "framer-motion";
import img from "../assets/images/aboutsection.png";
import pattern from "../assets/images/about-pattern.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative text-white px-4 sm:px-8 lg:px-24 py-20"
      style={{
        backgroundColor: "#0F1113",
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Responsive Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image First on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 w-full"
        >
          <img
            src={img}
            alt="About Masterpiece"
            className="w-full h-auto object-cover transition-transform duration-500 transform hover:scale-105 shadow-xl"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-2 lg:order-1 text-left"
        >
          {/* EST. 1989 + Line */}
          <div className="flex items-center mb-4">
            <span className="inline-block w-6 h-[2px] bg-primary mr-4"></span>
            <span className="uppercase text-sm tracking-wider font-semibold">
              Est. 1989
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Our Heritage Is <br className="hidden sm:inline-block" />
            Building Your Future
          </h2>

          {/* Paragraph */}
          <p className="text-[#7D8287] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            We undertake projects of all shapes and sizes – each and every one
            of which is treated with the same core values that characterise our
            company – honesty, integrity, professional advice and quality
            craftsmanship.
          </p>

          {/* Button */}
          <div className="relative inline-block group overflow-hidden">
            <span className="uppercase px-6 py-3 border border-white text-white font-medium tracking-wide relative z-10 block bg-transparent transition-colors duration-300 ease-in-out group-hover:text-black">
              About Us
            </span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left z-0"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
