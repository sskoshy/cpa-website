function Navbar() {
    return (
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-tight">
            <span className="text-sky-600">BlueOak</span> CPA
          </a>
  
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-slate-700 text-sm font-medium">
            <a href="/about" className="hover:text-sky-600 transition-colors">About Us</a>
            <a href="/team" className="hover:text-sky-600 transition-colors">Team</a>
            <a href="/services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="/careers" className="hover:text-sky-600 transition-colors">Careers</a>
            <a href="/clientportal" className="hover:text-sky-600 transition-colors">Client Portal</a>
            <a href="/newsroom" className="hover:text-sky-600 transition-colors">Newsroom</a>
          </nav>
  
          {/* Contact Button */}
          <a
            href="/contact"
            className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition"
          >
            Get in touch
          </a>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  