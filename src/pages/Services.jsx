import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServiceGrid";
import StartProject from "../components/StartProject";
import Footer from "../components/Footer";

const Services = () => {
    return (
     <>

     <Navbar />
     <Hero text="Services" img="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
     <ServicesGrid /> 
     <StartProject />
     <Footer />
     </>
    );
  };
  
  export default Services;
  