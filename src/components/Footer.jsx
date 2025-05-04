import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0e4f5c] text-[#eaeeef] font-poppins text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Message */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MASTERPIECE</h2>
          <p className="text-[#eaeeef]">
            We build more than structures — we craft spaces that connect and inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p>159 El Moltaqa El Arabi, Sheraton, Cairo</p>
          <p>📞 0222661742 / 0222661712</p>
          <p>✉️ info@masterpiece-eg.com</p>
        </div>

      </div>

      <div className="text-center border-t border-[#284a56] py-4 text-[#bfcfd4]">
        © {new Date().getFullYear()} Masterpiece Contracting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
