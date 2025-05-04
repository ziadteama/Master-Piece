import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import contracting from "../assets/images/contracting.png";
import facilities from "../assets/images/facilities.png";
import fitout from "../assets/images/fitout.png";
import mep from "../assets/images/mep.png";

export default function ServicesSplitOverlay() {
  const services = [
    { title: "General Contracting", image: contracting },
    { title: "Facilities & Property Management", image: facilities },
    { title: "Interior Finishing & Fit-Out", image: fitout },
    { title: "MEP Works", image: mep },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-[#0a0a0a]">
      {/* Desktop View */}
      <div className="h-[480px] hidden md:flex overflow-hidden">
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              className="absolute inset-0 bg-center bg-cover z-0"
              style={{ backgroundImage: `url(${services[activeIndex].image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/65 z-10" />

        <div className="relative z-20 flex w-full divide-x divide-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="flex-1 relative cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center px-2 text-center">
                <h3 className="text-white font-semibold text-xl md:text-2xl">
                  {service.title}
                </h3>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="button"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-8 w-full justify-center hidden md:flex"
                  >
                    <div className="group">
                      <AnimatedButton>Learn More</AnimatedButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="flex flex-col md:hidden px-3 py-3 space-y-0 bg-[#0a0a0a]">
        {services.map((service, index) => (
          <div key={index} className="w-full">
            <div className="relative overflow-hidden rounded-sm">
              <div
                className="h-[180px] sm:h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/65" />
                <div className="relative z-10 flex items-center justify-center h-full text-center px-3">
                  <h3 className="text-white text-3xl sm:text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Divider line (full width, thinner) */}
            {index < services.length - 1 && (
              <div className="h-px bg-white/10 w-full my-3" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
