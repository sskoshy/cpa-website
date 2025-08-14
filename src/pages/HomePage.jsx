import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [showMoreNews, setShowMoreNews] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButtons(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const news = [
    { t: "Top Accounting Firm of 2025", d: "Recognized for client focus and innovation.", date: "Jul 15, 2025" },
    { t: "Webinar: Tax Tips for Small Businesses", d: "Practical guidance to prepare for the season.", date: "Jul 30, 2025" },
  ];
  const moreNews = [
    { t: "Guide: Year-End Close Checklist", d: "A simple checklist to wrap the year smoothly.", date: "Aug 02, 2025" },
    { t: "Article: What to Prepare for an Audit", d: "Docs and timelines to reduce stress.", date: "Aug 05, 2025" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] pt-16 flex flex-col items-center justify-center px-4 sm:px-6 text-center bg-gradient-to-b from-sky-50 to-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">Welcome to Our CPA Firm</h1>
        <a href="#services" className="mt-8 inline-block px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition">
          Explore Our Services ↓
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Our Services</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">Practical guidance. Clear communication. Reliable execution.</p>
          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Tax", d: "Planning and preparation." },
              { t: "Audit", d: "Independent assurance." },
              { t: "Consulting", d: "Strategy & forecasting." },
              { t: "Transactions", d: "Diligence & valuation." },
            ].map((c, i) => (
              <div key={i} className="bg-sky-50 rounded-xl border border-sky-100 p-5 sm:p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">{c.t}</h3>
                <p className="text-sm text-slate-600 mt-1">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Newsroom Highlights</h2>
            <a href="/newsroom" className="text-sky-700 hover:underline">View all →</a>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {(showMoreNews ? [...news, ...moreNews] : news).map((n, i) => (
              <article key={i} className="rounded-xl border border-slate-200 p-5 bg-white hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">{n.t}</h3>
                <p className="text-sm text-slate-500 mt-1">{n.date}</p>
                <p className="text-slate-700 mt-2 text-sm">{n.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={() => setShowMoreNews(!showMoreNews)}
              className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50"
            >
              {showMoreNews ? "Show less" : "View more news"}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Ready to move forward?</h2>
          <p className="mt-2 text-sky-50">Explore careers or access your client documents.</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href="/careers" className="bg-white text-sky-700 px-5 py-2.5 rounded-lg hover:bg-sky-50 transition">Explore Careers</a>
            <a href="/clientportal" className="border border-white/60 px-5 py-2.5 rounded-lg hover:bg-sky-700/30 transition">Client Portal</a>
          </div>
        </div>
      </section>

      {/* Fixed Navigation Buttons */}
      {showButtons && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <Link
            to="/about"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-sky-700 transition"
          >
            Next →
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-sky-700 transition"
          >
            ↑ Top
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg font-semibold">CPA Firm, Inc.</p>
          <p className="text-sm mt-1">123 Main St, Suite 100, Sacramento, CA 95814</p>
          <p className="text-sm">info@cpafirm.com • (123) 456-7890</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {["/","/about","/team","/services","/newsroom","/contact"].map((href,i)=>(
              <a key={i} href={href} className="hover:underline">
                {["Home","About","Team","Services","Newsroom","Contact"][i]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
