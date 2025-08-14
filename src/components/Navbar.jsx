// components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-sky-600">BlueOak</span> CPA
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-slate-700 text-sm font-medium">
          <Link to="/about" className="hover:text-sky-600">About Us</Link>
          <Link to="/team" className="hover:text-sky-600">Team</Link>
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <Link to="/careers" className="hover:text-sky-600">Careers</Link>
          <Link to="/clientportal" className="hover:text-sky-600">Client Portal</Link>
          <Link to="/newsroom" className="hover:text-sky-600">Newsroom</Link>
        </nav>
        <Link to="/contact" className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
export default Navbar;
