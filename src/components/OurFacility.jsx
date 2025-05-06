import { motion } from "framer-motion";
import pattern from "../assets/images/about-pattern.png";

export default function FacilitiesSection() {
  return (
    <section
      id="facility"
      className="relative px-4 sm:px-8 lg:px-24 py-20 text-white scroll-mt-[140px]"
      style={{
        backgroundColor: "#0b2732", // lighter than #061820
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16758a] mb-10"
        >
          Where Vision Meets Capability
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#d0d7da] text-base sm:text-lg leading-relaxed mb-8 max-w-3xl"
        >
          At Masterpiece, our facilities are more than just workspaces — they are hubs of innovation, precision, and collaboration. Every detail is designed to support the seamless transition from concept to execution.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-[#d0d7da] text-base sm:text-lg list-disc list-inside leading-relaxed"
        >
          <li>
            <span className="font-semibold text-white">Dedicated Design Studios</span><br />
            Where our architects and planners bring creativity to life using industry-leading tools and immersive review sessions.
          </li>
          <li>
            <span className="font-semibold text-white">Structural & Engineering Labs</span><br />
            Purpose-built to test durability, efficiency, and constructability using modern methodologies and modeling.
          </li>
          <li>
            <span className="font-semibold text-white">Fabrication & Model Workshops</span><br />
            Equipped for prototyping, rapid testing, and physical mock-ups of components and materials.
          </li>
          <li>
            <span className="font-semibold text-white">Smart Material Library</span><br />
            An evolving collection of materials with a focus on sustainability, aesthetics, and performance.
          </li>
          <li>
            <span className="font-semibold text-white">Client Collaboration Lounges</span><br />
            Comfortable, tech-enabled spaces for review, walkthroughs, and milestone presentations.
          </li>
          <li>
            <span className="font-semibold text-white">Learning & Training Zones</span><br />
            Spaces dedicated to continuous development, hosting workshops, sessions, and internal certifications.
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
