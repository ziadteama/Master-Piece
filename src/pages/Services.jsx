import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServiceGrid";
import StartProject from "../components/StartProject";
import Footer from "../components/Footer";
import serviceHero from "../assets/images/services-hero.png";

const Services = () => {
    return (
     <>

     <Navbar />
     <Hero img={serviceHero} text="Services"/>
     <ServicesGrid /> 
     <StartProject />
     <Footer />
     </>
    );
  };
  
  export default Services;
  