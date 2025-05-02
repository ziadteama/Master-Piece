import Navbar from '../components/Navbar';
import About from '../components/AboutSection';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      {/* Add more sections here */}
    </>
  );
};

export default Home;
