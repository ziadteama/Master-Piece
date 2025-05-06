import { useEffect, useState } from "react";

const navItems = [
  { label: "Our History", target: "history" },
  { label: "Our Approach", target: "approach" },
  { label: "Our People", target: "people" },
  { label: "Our Facility", target: "facility" },
];

export default function AboutSubNav() {
  const [active, setActive] = useState("history");

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
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[72px] z-30 bg-white border-b border-gray-200 hidden sm:block">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex justify-center gap-6 sm:gap-10 text-sm uppercase font-semibold tracking-widest">
          {navItems.map(({ label, target }) => (
            <button
              key={target}
              onClick={() => handleScroll(target)}
              className={`relative px-3 pt-3 pb-4 transition-colors duration-300 ${
                active === target
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {label}
              {active === target && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#16758a]" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
