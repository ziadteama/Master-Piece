import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/images/approach-1.png";
import slide2 from "../assets/images/approach-2.png";
import slide3 from "../assets/images/approach-3.png";
import slide4 from "../assets/images/approach-4.png";

export default function OurApproach() {
  const slides = [slide1, slide2, slide3, slide4];

  return (
    <section
      id="approach"
      className="w-full bg-[#FEFEFE] py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
    >
      {/* Text Container */}
      <div className="max-w-[1140px] mx-auto px-2 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6 block ">
          Our Approach
        </h2>

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
      </div>

      {/* Full-Width Swiper with edge-connected images */}
      <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 xl:-mx-20">
        <div className="relative w-full z-10 overflow-visible">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            centeredSlides={true}
            spaceBetween={60}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 1.8 },
              1280: { slidesPerView: 2.1 },
            }}
            className="w-full overflow-visible"
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] xl:h-[580px] overflow-hidden">
                  <img
                    src={img}
                    alt={`Approach slide ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="custom-prev z-50 absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 bg-[#16758a] hover:bg-[#125f75] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16758a]"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="custom-next z-50 absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 bg-[#16758a] hover:bg-[#125f75] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16758a]"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
