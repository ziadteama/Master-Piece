import React from "react";
import IdentityButton from "../components/IdentityButton";
import startBg from "../assets/images/start-bg.png"; // Replace with actual dark GM-style image

const StartProject = () => {
  return (
    <section
  className="bg-cover bg-center text-white min-h-[45vh] flex items-center justify-center px-6"
  style={{
    backgroundImage: `linear-gradient(rgba(6, 24, 32, 0.85), rgba(6, 24, 32, 0.85)), url(${startBg})`
  }}
>

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-9 max-w-full mx-auto">
          Ready to create your next Masterpiece?{" "}
        </h2>
        <IdentityButton text="Get in Touch" href="/contact" />
      </div>
    </section>
  );
};

export default StartProject;
