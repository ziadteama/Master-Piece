import Navbar from '../components/Navbar';
import About from '../components/AboutSection';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <ServicesSection />
      <ProjectSection/>
      {/* Add more sections here */}
    </>
  );
};

export default Home;
