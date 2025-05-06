import { useState } from "react";
import people from "../data/people";
import PersonCardGrid from "./PersonCard";

export default function OurPeople() {
  const [activePerson, setActivePerson] = useState(null);

  return (
    <section
      id="people"
      className="bg-[#0a0a0a] py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 scroll-mt-[140px]"
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16 font-poppins">
          Our People
        </h2>

        {/* Grid using extracted PersonCardGrid component */}
        <PersonCardGrid people={people} onCardClick={setActivePerson} />
      </div>

      {/* Modal */}
      {activePerson && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-xl w-full p-6 rounded-lg relative shadow-xl">
            <button
              onClick={() => setActivePerson(null)}
              className="absolute top-4 right-4 text-black text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={activePerson.imageUrl}
              alt={activePerson.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-[#16758a] mb-2 font-poppins">
              {activePerson.name}
            </h3>
            <p className="text-sm font-semibold mb-1 font-poppins">{activePerson.title}</p>
            <p className="text-sm mb-1 font-poppins">
              <strong>Experience:</strong> {activePerson.experience}
            </p>
            <p className="text-sm mb-1 font-poppins">
              <strong>Qualifications:</strong> {activePerson.qualifications}
            </p>
            <p className="text-sm text-gray-700 mt-2 font-poppins">
              {activePerson.summary}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
