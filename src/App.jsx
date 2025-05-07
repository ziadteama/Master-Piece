import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Future pages */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
