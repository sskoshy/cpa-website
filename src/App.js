// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import ClientPortal from "./pages/ClientPortal";
import Newsroom from "./pages/Newsroom";
import Contact from "./pages/Contact";

function App() {
  // Basename for GitHub Pages; "/" for local dev
  const basename = process.env.NODE_ENV === "production" ? "/cpa-website" : "/";

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/clientportal" element={<ClientPortal />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Global footer appears once across the site */}
      <Footer />
    </Router>
  );
}

export default App;
