// pages/About.jsx or routes/About.jsx
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import SubNav from "../components/AboutSubNav";

export default function AboutPage() {
  return (
    <div className="relative bg-[#eaeeef] text-black font-poppins">
      <Navbar />
      <AboutHero />
      <SubNav />
      {/* Additional About sections will go here... */}
    </div>
  );
}
