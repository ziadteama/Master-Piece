import { useEffect, useState } from "react";
import people from "../data/people";
import PersonCardGrid from "./PersonCard";

export default function OurPeople() {
  const [activePerson, setActivePerson] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activePerson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePerson]);

  // Close modal on click outside paper
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setActivePerson(null);
    }
  };

  return (
    <section
      id="people"
      className="bg-[#FEFEFE] py-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
    >
      {/* Text Section */}
      <div className="max-w-[1140px] mx-auto text-left">
        {/* Title (small screens only) */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#16758a] mb-6 block lg:hidden font-poppins">
          Our People
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg leading-8 font-medium text-black mb-6 font-poppins">
          At Masterpiece, our people are more than professionals — they are the driving force behind every successful project. Each expert brings unmatched precision, passion, and purpose to the environments we shape.
        </p>

        {/* Supporting paragraph */}
        <p className="text-lg leading-8 text-gray-600 font-normal mb-12 font-poppins">
          From design thinkers and engineers to on-site leaders, our team reflects the values that define Masterpiece — integrity, innovation, and human-centered solutions.
        </p>
      </div>

      {/* Card Grid Section */}
      <div className="max-w-[1400px] mx-auto">
        <PersonCardGrid people={people} onCardClick={setActivePerson} />
      </div>

      {/* Modal */}
      {activePerson && (
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
        >
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative flex flex-col border-l-8 border-[#16758a]">
            <div className="p-6 sm:p-8 space-y-6">
              <button
                onClick={() => setActivePerson(null)}
                className="absolute top-4 right-4 text-black text-2xl font-bold"
              >
                ✕
              </button>

              {/* Name & Title */}
              <div>
                <h3 className="text-2xl font-bold text-[#16758a] mb-1 font-poppins">
                  {activePerson.name}
                </h3>
                <p className="text-sm font-semibold text-gray-800 font-poppins">
                  {activePerson.title}
                </p>
              </div>

              {/* Experience */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-poppins">
                  <strong>Experience:</strong> {activePerson.experience}
                </p>
              </div>

              {/* Qualifications */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-poppins">
                  <strong>Qualifications:</strong> {activePerson.qualifications}
                </p>
              </div>

              {/* Summary */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-700 font-poppins leading-relaxed">
                  {activePerson.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
