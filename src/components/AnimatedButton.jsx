export default function AnimatedButton({
  children,
  onClick,
  className = "",
  href,
  variant = "default",
}) {
  const isInverted = variant === "inverted";

  const wrapperClasses = `relative inline-block overflow-hidden ${className}`;

  const content = (
    <div className="relative inline-block group">
      <span
        className={`
          uppercase px-6 py-3 border
          ${isInverted ? "border-black text-black" : "border-white text-white"}
          font-medium tracking-wide relative z-10 block bg-transparent
          transition-colors duration-300 ease-in-out
          group-hover:${isInverted ? "text-white" : "text-black"}
        `}
      >
        {children}
      </span>
      <span
        className={`
          absolute inset-0
          ${isInverted ? "bg-black" : "bg-white"}
          transform scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 ease-in-out
          origin-right group-hover:origin-left z-0
        `}
      ></span>
    </div>
  );

  return href ? (
    <a href={href} onClick={onClick} className={wrapperClasses}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={wrapperClasses}>
      {content}
    </button>
  );
}
