import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg font-semibold">CPA Firm, Inc.</p>
        <p className="text-sm mt-1">123 Main St, Suite 100, Sacramento, CA 95814</p>
        <p className="text-sm">info@cpafirm.com • (123) 456-7890</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/services">Services</Link>
          <Link to="/newsroom">Newsroom</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
