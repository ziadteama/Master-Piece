import React from "react";

const IdentityButton = ({ text, href, className = "" }) => {
  return (
    <a
      href={href}
      className={`inline-block bg-[#16758a] text-white font-semibold text-md px-9 py-3 hover:bg-[#125e73] transition ${className}`}
    >
      {text}
    </a>
  );
};

export default IdentityButton;
