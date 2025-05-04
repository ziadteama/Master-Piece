import Navbar from '../components/Navbar';
import About from '../components/AboutSection';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import ProjectSection from '../components/ProjectSection';
import StartProject from '../components/StartProject';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <ServicesSection />
      <ProjectSection/>
      <StartProject/>
      <Footer/>
      {/* Add more sections here */}
    </>
  );
};

export default Home;
