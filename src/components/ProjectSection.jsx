import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Keyboard } from "swiper/modules";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const swiperRef = useRef(null);
  const [maxAnimatedIndex, setMaxAnimatedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!swiperRef.current) return;
      const swiper = swiperRef.current.swiper;
      if (e.key === "ArrowRight") {
        swiper.slideNext();
      } else if (e.key === "ArrowLeft") {
        swiper.slidePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Set animation limit based on screen size
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setMaxAnimatedIndex(2); // 3 cards
    } else if (width >= 640) {
      setMaxAnimatedIndex(1); // 2 cards
    } else {
      setMaxAnimatedIndex(0); // 1 card
    }
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between items-center mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2.2px] bg-primary block"></span>
            <h2 className="uppercase text-sm font-semibold tracking-wider text-black font-poppins">
              Selected Projects
            </h2>
          </div>
          <a
            href="/projects"
            className="text-sm text-gray-400 hover:text-black"
          >
            View All
          </a>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={16}
          keyboard={{ enabled: true }}
          tabIndex={0}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-dot">.</span>`,
          }}
          modules={[Pagination, Keyboard]}
          className="project-swiper"
        >
          {projects.map((project, i) => {
            const shouldAnimate = i <= maxAnimatedIndex;

            return (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <ProjectCard {...project} showButton />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Pagination Styling */}
        <style>{`
          .project-swiper .swiper-pagination {
            position: static;
            display: flex;
            justify-content: center;
            margin-top: 3rem;
            font-family: monospace;
          }

          .project-swiper .swiper-pagination-bullet {
            background: none !important;
            width: auto !important;
            height: auto !important;
            display: inline !important;
            border: none !important;
            padding: 0 !important;
          }

          .project-swiper .custom-dot {
            font-size: 22px !important;
            font-weight: bold;
            line-height: 1;
            margin: 0 14px;
            color: #BBBCBE;
            opacity: 1;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .project-swiper .swiper-pagination-bullet-active.custom-dot {
            color: black !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProjectSection;
