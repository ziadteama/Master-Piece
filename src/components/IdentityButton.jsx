import React from "react";
import { Link } from "react-router-dom";

const IdentityButton = ({
  text,
  href,
  to,
  as: Component = "a",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-block bg-[#16758a] text-white font-semibold text-md px-9 py-3 hover:bg-[#125e73] transition";

  // If React Router link
  if (Component === Link) {
    return (
      <Component to={to || href} className={`${baseClasses} ${className}`} {...props}>
        {text}
      </Component>
    );
  }

  // Default <a> tag (external link or fallback)
  return (
    <a href={href || to} className={`${baseClasses} ${className}`} {...props}>
      {text}
    </a>
  );
};

export default IdentityButton;
