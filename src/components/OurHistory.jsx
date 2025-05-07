import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import logo from "../assets/images/logo-placeholder.png"; // Replace with real logos

export default function OurHistory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const logos = Array(20).fill(logo); // Repeat logos for seamless loop

  return (
    <>
      <section
        id="history"
        className="w-full bg-[#FEFEFE] py-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px] pb-3"
      >
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6 block lg:hidden">
            Our History
          </h2>

          <p className="text-lg leading-8 font-medium text-[#111827] mb-6">
            Founded with the belief that construction is both an art and a
            responsibility, Masterpiece has grown from ambition into one of
            Egypt's most trusted names.
          </p>

          <p className="text-lg leading-8 text-[#4B5563] font-normal mb-12">
            From our earliest days, we've been committed to redefining industry
            standards — not just in design and structure, but in trust and
            reliability...
          </p>

          <div className="border-l-4 border-[#16758a] pl-6 text-xl md:text-2xl font-semibold text-[#1F2937] italic mb-16">
            “We build with purpose, not just concrete...”
            <div className="mt-4 not-italic font-normal text-base text-[#6B7280]">
              — Eng. Mostafa Mahmoud, Chairman of the Board
            </div>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20"
          >
            <div>
              <p className="text-3xl font-bold text-[#16758a]">
                {inView && <CountUp end={500} duration={2} suffix="+" />}
              </p>
              <p className="text-sm font-medium text-[#374151] mt-2">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#16758a]">
                {inView && <CountUp end={3} duration={2} />}
              </p>
              <p className="text-sm font-medium text-[#374151] mt-2">
                Countries Operated In
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#16758a]">
                {inView && (
                  <CountUp end={1.1} duration={2} decimals={1} suffix="B EGP" />
                )}
              </p>
              <p className="text-sm font-medium text-[#374151] mt-2">
                Largest Project Value
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#16758a]">
                {inView && <CountUp end={25} duration={2} suffix="+" />}
              </p>
              <p className="text-sm font-medium text-[#374151] mt-2">
                Years of Expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker Separator with bottom line */}
      <div className="w-full bg-white pt-3 pb-1 overflow-hidden">
        <div className="h-36 flex items-center">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            freeMode={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            spaceBetween={80}
            className="w-full"
          >
            {logos.map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-auto flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Logo ${idx + 1}`}
                  className="h-40 sm:h-28 md:h-40 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom colored separator line */}
        <div className="w-full h-[3px] bg-[#16758a] mt-3 opacity-60" />
      </div>
    </>
  );
}
