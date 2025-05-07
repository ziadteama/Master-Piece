import pattern from '../assets/images/about-pattern.png';
export default function Hero(props) {
  return (
    <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={props.img}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover sm:object-center object-[center_top] z-0"
      />

      {/* Pattern Overlay */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover  z-10 pointer-events-none"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-20" />

      {/* Centered Heading */}
      <div className="relative z-30 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight">
          {props.text}
        </h1>
      </div>
    </section>
  );
}
