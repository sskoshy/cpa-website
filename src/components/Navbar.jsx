// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/80 to-slate-100/60 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo + wordmark */}
        <Link to="/" className="flex items-center gap-3">
          {/* Gradient emblem with soft glow */}
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              className="shrink-0 drop-shadow-sm"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="boGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#312e81" /> {/* indigo-900 */}
                  <stop offset="100%" stopColor="#0369a1" /> {/* sky-700 */}
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="22" fill="url(#boGrad)" />
              {/* abstract oak leaf / B-glyph */}
              <path
                d="M18 30c4-1 7-5 7-10 0-3-2-5-5-5-4 0-6 3-6 6 0 4 2 7 4 9Zm6 2c3-1 6-3 8-6 2-3 2-7 0-9-1-1-3-2-5-1"
                fill="#fff"
                fillOpacity="0.95"
                stroke="#fff"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
            {/* glow ring */}
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/30 blur-[0.5px]" />
          </div>

          <div className="leading-tight">
            <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-sky-700">
                BlueOak
              </span>{" "}
              <span className="text-slate-900">CPA</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 -mt-0.5">
              Tax • Audit • Advisory
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-slate-700 text-sm font-medium">
          {[
            { to: "/about", label: "About Us" },
            { to: "/team", label: "Team" },
            { to: "/services", label: "Services" },
            { to: "/careers", label: "Careers" },
            { to: "/newsroom", label: "Newsroom" }, // swapped before Client Portal
            { to: "/clientportal", label: "Client Portal" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-1 py-0.5 hover:text-sky-900 transition-colors"
            >
              <span className="hover:underline underline-offset-4 decoration-2">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-gradient-to-r from-indigo-900 to-sky-700 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:brightness-[1.03] transition text-sm"
        >
          Get in touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-slate-100"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 my-1 transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1.5 text-slate-800 text-base">
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              About Us
            </Link>
            <Link to="/team" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              Team
            </Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              Services
            </Link>
            <Link to="/careers" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              Careers
            </Link>
            {/* Swapped order: Newsroom before Client Portal */}
            <Link to="/newsroom" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              Newsroom
            </Link>
            <Link to="/clientportal" onClick={() => setOpen(false)} className="py-2 rounded hover:bg-slate-100">
              Client Portal
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block bg-gradient-to-r from-indigo-900 to-sky-700 text-white px-4 py-2 rounded-full text-sm text-center shadow-sm hover:shadow-md"
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
