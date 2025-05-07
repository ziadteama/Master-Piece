import { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/images/logo-placeholder.png"; // Replace with real logos

export default function OurHistory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <section
        id="history"
        className="w-full bg-[#f9fafb] py-16 mb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
      >
        <div className="max-w-[1140px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6"
            data-aos="fade-up"
          >
            Our History
          </h2>

          <p
            className="text-lg leading-8 font-medium text-[#111827] mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Founded with the belief that construction is both an art and a
            responsibility, Masterpiece has grown from ambition into one of
            Egypt's most trusted names.
          </p>

          <p
            className="text-lg leading-8 text-[#4B5563] font-normal mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From our earliest days, we've been committed to redefining industry
            standards — not just in design and structure, but in trust and
            reliability...
          </p>

          <div
            className="border-l-4 border-[#16758a] pl-6 text-xl md:text-2xl font-semibold text-[#1F2937] italic mb-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            “We build with purpose, not just concrete...”
            <div className="mt-4 not-italic font-normal text-base text-[#6B7280]">
              — Eng. Mostafa Mahmoud, Chairman of the Board
            </div>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20"
            data-aos="fade-up"
            data-aos-delay="400"
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
    </>
  );
}
