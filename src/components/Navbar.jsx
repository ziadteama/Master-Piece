import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Animated white background behind navbar */}
      <div
        className={`absolute inset-0 z-[-1] bg-white origin-top transform transition-transform duration-500 ease-out ${
          scrolled ? "scale-y-100" : "scale-y-0"
        }`}
      ></div>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div
        className={`relative flex items-center justify-between w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 transition-all duration-500 ${
          scrolled ? "top-0 py-2" : "top-4 py-6 sm:py-8 lg:py-2"
        }`}
      >
        {/* Logo with padding */}
        <div className="w-[60px] sm:w-[72px] md:w-[84px] pt-1.5 pb-1.5 sm:pt-3 sm:pb-3 lg:pt-1 lg:pb-1 transition-all duration-300">
          <img
            src={Logo}
            alt="Masterpiece Logo"
            className={`w-full h-auto transition-all duration-500 ${
              scrolled ? "invert-0" : "invert"
            }`}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-poppins uppercase text-[14px] tracking-wider">
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className="relative flex flex-col items-center group"
              >
                {/* Fixed-Width Vertical Line (Desktop only) */}
                <span className="absolute top-[-60px] flex justify-center overflow-hidden h-14 w-[12px]">
                  <span
                    className={`w-[2px] transition-all duration-300 ${
                      isActive
                        ? "bg-primary h-full"
                        : scrolled
                        ? "bg-black h-0 group-hover:h-full"
                        : "bg-white h-0 group-hover:h-full"
                    }`}
                  ></span>
                </span>

                <span
                  className={`transition-all duration-300 leading-[1.8] ${
                    isActive
                      ? scrolled
                        ? "text-black font-semibold"
                        : "text-white font-semibold"
                      : scrolled
                      ? "text-black/70 font-medium group-hover:text-black"
                      : "text-white/70 font-medium group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Hamburger (only hidden when drawer is open) */}
        {!mobileOpen && (
          <button
            className={`md:hidden z-50 relative p-2 transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setMobileOpen(true)}
          >
            <div
              className={`md:hidden z-50 relative flex flex-col justify-center gap-[6px] w-[38px] h-[32px] transition-all duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setMobileOpen(true)}
            >
              <span className="block w-full h-[2px] bg-current"></span>
              <span className="block h-[2px] bg-current ml-3 w-[calc(100%-12px)]"></span>
              <span className="block w-full h-[2px] bg-current"></span>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Drawer (Right Slide-In) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-sm bg-white text-black z-40 origin-right transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        <div className="flex flex-col justify-between h-full relative">
          {/* Close Button top-right */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Nav */}
          <div className="flex flex-col justify-center h-full px-6">
            <nav className="mt-16 font-poppins text-lg uppercase tracking-wide font-medium w-full">
              {navItems.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-4 w-full ${
                      isActive
                        ? "text-primary font-semibold relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[20px] before:h-[2px] before:bg-primary"
                        : "text-black"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="border-t px-6 py-4 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <a href="tel:+20222661712" className="text-xl">
                📞
              </a>
              <a href="mailto:info@masterpiece-eg.com" className="text-xl">
                ✉️
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-primary text-white font-bold py-2 uppercase tracking-wider text-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
