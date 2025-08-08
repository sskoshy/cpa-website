import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Newsroom from './pages/Newsroom';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clientportal" element={<ClientPortal />} />




      </Routes>
    </Router>
  );
}

export default App;