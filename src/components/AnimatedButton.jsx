// Updated AnimatedButton.jsx
export default function AnimatedButton({ children, onClick, className = "", href }) {
    const baseStyles =
      "relative inline-block overflow-hidden group " + className;
  
    const content = (
      <>
        <span className="uppercase px-6 py-3 border border-white text-white font-medium tracking-wide relative z-10 block bg-transparent transition-colors duration-300 ease-in-out group-hover:text-black">
          {children}
        </span>
        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left z-0"></span>
      </>
    );
  
    return href ? (
      <a href={href} onClick={onClick} className={baseStyles}>
        {content}
      </a>
    ) : (
      <button onClick={onClick} className={baseStyles}>
        {content}
      </button>
    );
  }
  