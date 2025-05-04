import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="uppercase text-sm font-semibold tracking-wider relative pl-4 border-l-4 border-red-600">
            Selected Projects
          </h2>
          <a href="/projects" className="text-sm text-gray-400 hover:text-black">
            View All
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1.2}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard {...project} showButton />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Inline Swiper Pagination Styling */}
        <div className="swiper-pagination mt-12 flex justify-center"></div>

        <style>{`
          .project-swiper .swiper-pagination {
            position: static;
            display: flex;
            justify-content: center;
            margin-top: 3rem;
          }

          .project-swiper .swiper-pagination-bullet {
            width: .375rem;
            height: .375rem;
            background-color: #BBBCBE;
            border: none;
            border-radius: 50%;
            opacity: 1;
            margin: 0 .25rem;
            transition: all 0.3s ease;
          }

          .project-swiper .swiper-pagination-bullet-active {
            background-color: black;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProjectSection;
