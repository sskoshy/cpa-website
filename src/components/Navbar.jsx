// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-sky-600">BlueOak</span> CPA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-slate-700 text-sm font-medium">
          <Link to="/about" className="hover:text-sky-600">About Us</Link>
          <Link to="/team" className="hover:text-sky-600">Team</Link>
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <Link to="/careers" className="hover:text-sky-600">Careers</Link>
          <Link to="/clientportal" className="hover:text-sky-600">Client Portal</Link>
          <Link to="/newsroom" className="hover:text-sky-600">Newsroom</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition text-sm"
        >
          Get in touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-slate-100"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* simple hamburger / close */}
          <span className={`block w-5 h-0.5 bg-slate-900 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-900 my-1 transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-900 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-2 text-slate-700 text-base">
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">About Us</Link>
            <Link to="/team" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Team</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Services</Link>
            <Link to="/careers" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Careers</Link>
            <Link to="/clientportal" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Client Portal</Link>
            <Link to="/newsroom" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Newsroom</Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block bg-sky-600 text-white px-4 py-2 rounded-full text-sm text-center hover:bg-sky-700"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
