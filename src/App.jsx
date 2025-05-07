import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/About" element={<About />} />

        {/* Future pages */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
