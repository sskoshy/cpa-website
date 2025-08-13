function HomePage() {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Hero: Title + Button */}
        <section className="h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-sky-50 to-white">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900">
            Welcome to Our CPA Firm
          </h1>
          <a
            href="#services"
            className="mt-8 px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
          >
            Explore Our Services ↓
          </a>
        </section>
  
        {/* Quick overview of services */}
        <section id="services" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-slate-900 text-center">Our Services</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">
              Practical guidance. Clear communication. Reliable execution.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-sky-50 rounded-xl border border-sky-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Tax</h3>
                <p className="text-sm text-slate-600 mt-1">Planning and preparation.</p>
              </div>
              <div className="bg-sky-50 rounded-xl border border-sky-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Audit</h3>
                <p className="text-sm text-slate-600 mt-1">Independent assurance.</p>
              </div>
              <div className="bg-sky-50 rounded-xl border border-sky-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Consulting</h3>
                <p className="text-sm text-slate-600 mt-1">Strategy & forecasting.</p>
              </div>
              <div className="bg-sky-50 rounded-xl border border-sky-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Transactions</h3>
                <p className="text-sm text-slate-600 mt-1">Diligence & valuation.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Newsroom Highlights */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-slate-900">Newsroom Highlights</h2>
              <a href="/newsroom" className="text-sky-700 hover:underline">View all →</a>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-200 p-5 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">Top Accounting Firm of 2025</h3>
                <p className="text-sm text-slate-500 mt-1">Jul 15, 2025</p>
                <p className="text-slate-700 mt-2 text-sm">
                  Recognized for client focus and innovation.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 p-5 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">Webinar: Tax Tips for Small Businesses</h3>
                <p className="text-sm text-slate-500 mt-1">Jul 30, 2025</p>
                <p className="text-slate-700 mt-2 text-sm">
                  Practical guidance to prepare for the season.
                </p>
              </article>
            </div>
          </div>
        </section>
  
        {/* Call to action */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white p-8">
            <h2 className="text-2xl font-semibold">Ready to move forward?</h2>
            <p className="mt-2 text-sky-50">Explore careers or access your client documents.</p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a href="/careers" className="bg-white text-sky-700 px-5 py-2.5 rounded-lg hover:bg-sky-50">
                Explore Careers
              </a>
              <a href="/clientportal" className="border border-white/60 px-5 py-2.5 rounded-lg hover:bg-sky-700/30">
                Client Portal
              </a>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-lg font-semibold">CPA Firm, Inc.</p>
            <p className="text-sm mt-1">123 Main St, Suite 100, Sacramento, CA 95814</p>
            <p className="text-sm">info@cpafirm.com • (123) 456-7890</p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/team" className="hover:underline">Team</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/newsroom" className="hover:underline">Newsroom</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default HomePage;
  
  