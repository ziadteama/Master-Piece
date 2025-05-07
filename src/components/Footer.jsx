import React from "react";
import LogoSVG from "./LogoSVG";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#061820] text-[#d0d7da] font-poppins text-sm">
      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 pt-24 pb-20 items-start justify-between gap-16">
        {/* Left: Logo + Links */}
        <div className="flex items-start gap-12 flex-wrap md:flex-nowrap flex-grow">
          {/* Logo */}
          <div className="h-10 opacity-60">
            <LogoSVG color="#ffffff" className="h-full w-auto" />
          </div>

          {/* Divider */}
          <div className="border-l border-[#26414b] self-stretch" />

          {/* Group 1 */}
          <div className="space-y-2 uppercase font-semibold text-white tracking-wide">
            <Link to="/" className="block hover:opacity-80">
              Home
            </Link>
            <Link to="/projects" className="block hover:opacity-80">
              Projects
            </Link>
            <Link to="/services" className="block hover:opacity-80">
              Services
            </Link>
          </div>

          <div className="border-l border-[#26414b] self-stretch" />

          {/* Group 2 */}
          <div className="space-y-2 uppercase font-semibold text-white tracking-wide">
            <Link to="/about" className="block hover:opacity-80">
              About
            </Link>
            <Link to="/contact" className="block hover:opacity-80">
              Contact
            </Link>
          </div>

          <div className="border-l border-[#26414b] self-stretch" />

          {/* Group 3 */}
          <div className="space-y-2 uppercase font-semibold text-white tracking-wide">
            <Link to="/terms" className="block hover:opacity-80">
              Terms
            </Link>
            <Link to="/privacy" className="block hover:opacity-80">
              Privacy
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 pt-2">
          <AnimatedButton
            as={Link}
            to="/contact"
            className="text-base px-8 py-4 tracking-wide md:text-md md:px-10 md:py-5"
          >
            Start a Project
          </AnimatedButton>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-2xl mx-auto px-6 pt-8 pb-10 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <div className="h-10 opacity-60">
          <LogoSVG color="#ffffff" className="h-full w-auto" />
        </div>

        {/* CTA Button */}
        <AnimatedButton
          as={Link}
          to="/contact"
          className="text-base px-8 py-4 tracking-wide md:text-md md:px-10 md:py-5"
        >
          Start a Project
        </AnimatedButton>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#284a56] text-xs text-[#bfcfd4] px-6 py-6 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Masterpiece Contracting</p>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 sm:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 opacity-60 hover:opacity-80 transition"
          >
            <rect width="24" height="24" rx="4" fill="white" />
            <path
              d="M9.5 9H7.5v6H9.5V9zm-1-3a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM17.5 15H15v-2.4c0-1.2-1.5-1.1-1.5 0V15H11v-6h2.5v.75C14 8.6 17.5 8.5 17.5 11.25V15z"
              fill="#061820"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
