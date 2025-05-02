import Navbar from '../components/Navbar';
import About from '../components/AboutSection';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <ServicesSection />
      {/* Add more sections here */}
    </>
  );
};

export default Home;
