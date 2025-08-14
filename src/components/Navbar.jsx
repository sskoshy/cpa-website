import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          <span className="text-sky-600">BlueOak</span> CPA
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="/about" className="hover:text-sky-600 transition">About</a>
          <a href="/team" className="hover:text-sky-600 transition">Team</a>
          <a href="/services" className="hover:text-sky-600 transition">Services</a>
          <a href="/careers" className="hover:text-sky-600 transition">Careers</a>
          <a href="/clientportal" className="hover:text-sky-600 transition">Client Portal</a>
          <a href="/newsroom" className="hover:text-sky-600 transition">Newsroom</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/contact"
            className="hidden sm:inline-block bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Get in touch
          </a>
          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded hover:bg-slate-100"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 text-slate-700 text-sm">
            <a href="/about" onClick={() => setOpen(false)} className="py-1">About</a>
            <a href="/team" onClick={() => setOpen(false)} className="py-1">Team</a>
            <a href="/services" onClick={() => setOpen(false)} className="py-1">Services</a>
            <a href="/careers" onClick={() => setOpen(false)} className="py-1">Careers</a>
            <a href="/clientportal" onClick={() => setOpen(false)} className="py-1">Client Portal</a>
            <a href="/newsroom" onClick={() => setOpen(false)} className="py-1">Newsroom</a>
            <a href="/contact" onClick={() => setOpen(false)} className="py-1">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
