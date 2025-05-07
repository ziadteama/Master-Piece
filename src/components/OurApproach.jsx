import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import placeholder from "../assets/images/data-needed-slide.png";

export default function OurApproach() {
  return (
    <section
      id="approach"
      className="w-full bg-[#FEFEFE] py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
    >
      <div className="max-w-[1140px] mx-auto px-2 sm:px-0">
        {/* Title (mobile only) */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6 block lg:hidden">
          Our Approach
        </h2>

        {/* Text */}
        <p className="text-lg leading-8 font-medium text-[#111827] mb-6">
          At Masterpiece, our approach goes beyond building — we create
          purposeful spaces that harmonize design, durability, and the client's
          vision.
        </p>
        <p className="text-lg leading-8 text-[#4B5563] font-normal mb-12">
          From the first line drawn to the final stone placed, we maintain an
          unwavering commitment to precision, transparency, and innovation. Our
          multidisciplinary team works collaboratively, ensuring that each
          project reflects the highest standards in architecture, engineering,
          and interior detailing. With deep-rooted values and forward-thinking
          design, we approach every challenge as an opportunity to transform
          vision into reality.
        </p>

        {/* Swiper Slideshow */}
        <div className="relative z-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            centeredSlides={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.9 },
              1280: { slidesPerView: 2.1 },
            }}
            className="w-full"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <SwiperSlide key={n}>
                <img
                  src={placeholder}
                  alt={`Approach slide ${n}`}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="custom-prev absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#16758a] hover:bg-[#125f75] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16758a]"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="custom-next absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#16758a] hover:bg-[#125f75] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16758a]"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
