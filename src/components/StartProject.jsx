import React from "react";
import { motion } from "framer-motion";
import IdentityButton from "../components/IdentityButton";
import startBg from "../assets/images/start-bg.png"; // Replace with actual dark GM-style image

const StartProject = () => {
  return (
    <section
      className="bg-cover bg-center text-white min-h-[45vh] flex items-center justify-center px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 24, 32, 0.45), rgba(6, 24, 32, 0.45)), url(${startBg})`,
      }}
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-poppins mb-9 max-w-full mx-auto"
        >
          Ready to create your next Masterpiece?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <IdentityButton text="Get in Touch" href="/contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default StartProject;
  