import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/images/logo-placeholder.png"; // Replace with real logos

export default function OurApproach() {
  const logos = Array(6).fill(logo); // Replace with actual logos

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="approach"
      className="w-full bg-[#FEFEFE] py-16 mb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
    >
      {/* Text Content */}
      <div className="max-w-[1140px] mx-auto px-2 sm:px-0">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6"
          data-aos="fade-up"
        >
          Our Approach
        </h2>

        <p
          className="text-lg leading-8 font-medium text-[#111827] mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Masterpiece, our approach goes beyond building — we create
          purposeful spaces that harmonize design, durability, and the client's
          vision.
        </p>
        <p
          className="text-lg leading-8 text-[#4B5563] font-normal mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From the first line drawn to the final stone placed, we maintain an
          unwavering commitment to precision, transparency, and innovation.
          Our multidisciplinary team works collaboratively, ensuring that each
          project reflects the highest standards in architecture, engineering,
          and interior detailing.
        </p>
      </div>

      {/* Logo Grid Section */}
      <div className="w-full bg-[#f9fafb] py-2 sm:py-6 lg:py-8 mt-2 sm:mt-4 lg:mt-6">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-center text-[#16758a] text-base sm:text-xl font-semibold tracking-wide mb-4 sm:mb-6"
            data-aos="fade-up"
          >
            Trusted by Our Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-6 items-center justify-items-center">
            {logos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Partner Logo ${idx + 1}`}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
                className="h-28 sm:h-32 md:h-36 lg:h-44 max-h-48 object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
