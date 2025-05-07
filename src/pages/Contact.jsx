import ContactHero from "../components/Hero";
import contactHero from "../assets/images/contracting.png";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <main className="bg-[#FEFEFE] text-[#0a0a0a]">
      <Navbar />
      <ContactHero img={contactHero} text="Get in Touch With Us Regarding your next masterpiece" />
      <ContactSection />  
      <Footer />
    </main>
  );
}