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
    <header
      className={`fixed w-full z-50 transition-all duration-500 bg-transparent text-white ${
        scrolled ? "top-0 pt-4" : "top-10 pt-6"
      }`}
    >
      <div className="w-full max-w-[1320px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10">
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
                        : "bg-white h-0 group-hover:h-full"
                    }`}
                  ></span>
                </span>

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

        {/* Hamburger */}
        <button
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Right Slide-In) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-sm bg-white text-black z-40 origin-right transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Nav */}
          <div className="flex flex-col justify-center h-full px-6">
            <div className="flex justify-end pt-6">
              <button onClick={() => setMobileOpen(false)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-10 space-y-6 font-poppins text-base uppercase tracking-wide font-medium">
              {navItems.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center ${
                      isActive ? "text-primary font-semibold" : "text-black"
                    }`}
                  >
                    {isActive && (
                      <span className="block h-[2px] w-5 bg-primary mr-3" />
                    )}
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="border-t px-6 py-4 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <a href="tel:+123456789" className="text-xl">📞</a>
              <a href="mailto:info@example.com" className="text-xl">✉️</a>
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
