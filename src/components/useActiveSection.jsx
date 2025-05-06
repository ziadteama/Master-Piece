import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-150px 0px -60% 0px", // works well for sticky headers
        threshold: 0.2,                    // good for partial visibility
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean); // filter out nulls

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
