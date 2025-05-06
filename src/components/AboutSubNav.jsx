import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Our History", target: "history" },
  { label: "Our Approach", target: "approach" },
  { label: "Our People", target: "people" },
  { label: "Our Facility", target: "facility" },
];

export default function AboutSubNav() {
  const [active, setActive] = useState("history");
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -30% 0px",
        threshold: 0.2,
      }
    );

    navItems.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setLineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-[96px] z-30 bg-white border-b border-gray-200 hidden sm:block">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative">
        <nav className="flex justify-center gap-6 sm:gap-10 text-sm uppercase font-semibold tracking-widest relative">
          {navItems.map(({ label, target }) => (
            <button
              key={target}
              ref={(el) => (refs.current[target] = el)}
              onClick={() => handleScroll(target)}
              className={`relative px-3 py-5 transition-colors duration-300 ${
                active === target
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
          {/* Animated underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-[#16758a] transition-all duration-300"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />
        </nav>
      </div>
    </div>
  );
}
