import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg"; // update if SVG

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "top-0 pt-4" : "top-10 pt-6"
      } bg-transparent text-white`}
    >
      <div className="w-full max-w-[1320px] mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="w-20 transition-all duration-300">
          <img
            src={Logo}
            alt="Masterpiece Logo"
            className={`w-full h-auto transition-colors duration-500 ${
              scrolled ? "invert-0" : "invert"
            }`}
          />
        </div>

        {/* Nav */}
        <nav className="flex gap-8 font-poppins uppercase text-[14px] tracking-wider">
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={label}
                to={path}
                className="relative flex flex-col items-center group"
              >
                {/* Vertical Line */}
                <span className="absolute top-[-60px] flex justify-center overflow-hidden h-14">
                  <span
                    className={`w-[2.4px] transition-all duration-300 ${
                      isActive
                        ? "bg-primary h-full"
                        : "bg-white h-0 group-hover:h-full"
                    }`}
                  ></span>
                </span>

                {/* Text */}
                <span
                  className={`transition-all duration-300 leading-[1.8] ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/70 font-medium group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
