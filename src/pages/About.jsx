// pages/About.jsx or routes/About.jsx
import Navbar from "../components/Navbar";
import AboutHero from "../components/Hero";
import SubNav from "../components/AboutSubNav";
import OurHistory from  "../components/OurHistory";
import OurApproach from "../components/OurApproach";
import OurPeople from "../components/OurPeople";
import OurFacility from "../components/OurFacility";
import Footer from "../components/Footer";
import aboutHero from "../assets/images/about-hero.png"; ;

export default function AboutPage() {
  return (
    <div className="relative bg-[#eaeeef] text-black font-poppins">
      <Navbar />
      <AboutHero img={aboutHero} text="About"/>
      <SubNav />
      <OurHistory />
      <OurApproach />
      <OurPeople />
      <OurFacility />
      <Footer/>
      {/* Additional About sections will go here... */}
    </div>
  );
}
