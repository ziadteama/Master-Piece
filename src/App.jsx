import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />

      {/* Future pages */}
      {/* <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  )
}

export default App
