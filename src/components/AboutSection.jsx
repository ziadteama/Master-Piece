import { motion } from "framer-motion";
import img from "../assets/images/aboutsection.png";
import pattern from "../assets/images/about-pattern.png";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative text-white px-4 sm:px-8 lg:px-24 py-20"
      style={{
        backgroundColor: "#031016",
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
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
            className="w-full h-auto object-cover transition-transform duration-500 shadow-xl"
          />
        </motion.div>

        {/* Text Column (now animated separately) */}
        <div className="order-2 lg:order-1 text-left">
          {/* EST. 2007 + Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4"
          >
            <span className="inline-block w-6 h-[2px] bg-primary mr-4"></span>
            <span className="uppercase text-sm tracking-wider font-semibold">
              Est. 2007
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Our Heritage Is <br className="hidden sm:inline-block" />
            Building Your Future
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#7D8287] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            We began as a small, ambitious team with a passion for delivering
            high-quality, meaningful projects. Over time, our dedication to
            excellence has shaped Masterpiece into a trusted name in design and
            construction. Today, whether designing homes, offices, or retail
            spaces, we approach every project with the same purpose: to serve
            the communities and individuals who bring these spaces to life. From
            concept to completion, we craft experiences that inspire, endure,
            and elevate.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedButton as={Link} to="/about">
              About Us
            </AnimatedButton>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
