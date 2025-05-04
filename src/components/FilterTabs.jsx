import React from "react";

const FilterTabs = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex gap-6 justify-center mb-8 flex-wrap">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`text-sm font-medium pb-1 border-b-2 transition-all ${
            activeCategory === category
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
