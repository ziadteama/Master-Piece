export default function OurHistory() {
  return (
    <section
      id="history"
      className="w-full bg-white py-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Title (small screens only) */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6 block lg:hidden">
          Our History
        </h2>

        {/* Lead paragraph */}
        <p className="text-lg leading-8 font-medium text-black mb-6">
          Founded with the belief that construction is both an art and a
          responsibility, Masterpiece has grown from ambition into one of
          Egypt's most trusted names.
        </p>

        {/* Supporting paragraph */}
        <p className="text-lg leading-8 text-gray-600 font-normal mb-12">
          From our earliest days, we've been committed to redefining industry
          standards — not just in design and structure, but in trust and
          reliability. Our journey has always been shaped by a relentless
          pursuit of quality, meaningful client relationships, and a deep
          understanding of the environments we build for.
        </p>

        {/* Chairman Quote */}
        <div className="border-l-4 border-[#16758a] pl-6 text-xl md:text-2xl font-semibold text-black/90 italic mb-16">
          “We build with purpose, not just concrete. Every detail is a promise
          kept.”
          <div className="mt-4 not-italic font-normal text-base text-black/70">
            — Eng. Mostafa Mahmoud, Chairman of the Board
          </div>
        </div>

        {/* Placeholder for visual/interactive feature */}
        <div className="w-full bg-[#f9f9f9] py-12 px-4 sm:px-6 md:px-8 rounded-md text-center border border-dashed border-gray-300">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500">
            [ Feature section under discussion — waiting for decision ]
          </p>
        </div>
      </div>
    </section>
  );
}
