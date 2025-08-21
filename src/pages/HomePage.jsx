// src/pages/Home.jsx
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  const news = [
    { t: "Top Accounting Firm of 2025", d: "Recognized for client focus and innovation.", date: "Jul 15, 2025" },
    { t: "Webinar: Tax Tips for Small Businesses", d: "Practical guidance to prepare for the season.", date: "Jul 30, 2025" },
  ];
  const moreNews = [
    { t: "Guide: Year-End Close Checklist", d: "A simple checklist to wrap the year smoothly.", date: "Aug 02, 2025" },
    { t: "What to Prepare for an Audit", d: "Docs and timelines to reduce stress.", date: "Aug 05, 2025" },
  ];

  const testimonials = [
    { q: "BlueOak gave us clarity on a complex tax position and saved us weeks of work.", a: "COO, Venture-backed SaaS" },
    { q: "Their audit team is responsive, pragmatic, and thorough. Exactly what we needed.", a: "CFO, Nonprofit Healthcare" },
    { q: "They feel like a true partner—strategic, fast, and easy to work with.", a: "Founder, Consumer Goods" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero (deep blue gradient + subtle color glows) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-sky-700" />
        {/* brighter, colorful glows */}
        <div className="absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-pink-400/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-sky-400/20 blur-3xl rounded-full" />

        <div className="relative pt-28 pb-24 px-6">
          <div className="max-w-6xl mx-auto text-center text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-wide">
              Trusted advice • Clear execution
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Financial clarity for every stage of growth
            </h1>

            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Tax, audit, and advisory services that help you move with confidence.
            </p>

            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-200 to-white text-indigo-900 font-medium hover:from-white hover:to-slate-100 transition"
              >
                Talk to us
              </Link>
              <a
                href="#services"
                className="px-6 py-3 rounded-lg border border-white/70 text-white hover:bg-white/10 transition"
              >
                Explore services ↓
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { k: "98%", v: "Client satisfaction" },
                { k: "100+", v: "Active clients" },
                { k: "20+ yrs", v: "Combined experience" },
              ].map((i) => (
                <div key={i.k} className="rounded-xl bg-white/10 border border-white/15 p-4">
                  <div className="text-2xl font-semibold">{i.k}</div>
                  <div className="text-white/90">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* “Trusted by” strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-6 justify-center flex-wrap">
          <span className="text-slate-500 text-sm">Trusted by</span>
          <div className="h-6 w-24 rounded bg-slate-100" />
          <div className="h-6 w-24 rounded bg-slate-100" />
          <div className="h-6 w-24 rounded bg-slate-100" />
          <div className="h-6 w-24 rounded bg-slate-100" />
        </div>
      </section>

      {/* Feature band with gentle color */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "💡", t: "Clear guidance", d: "Straightforward advice you can act on—no jargon." },
            { icon: "🔒", t: "Reliable process", d: "On-time, consistent, and thoroughly documented." },
            { icon: "🤝", t: "Partner mindset", d: "We operate like an extension of your team." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl p-6 hover:shadow-md transition bg-gradient-to-br from-indigo-50 to-white border border-indigo-100"
            >
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{c.t}</h3>
              <p className="text-slate-600 mt-1">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services with accent top borders */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">Our Services</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">
            Practical guidance. Clear communication. Reliable execution.
          </p>

          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🧾", t: "Tax", d: "Planning and preparation." },
              { icon: "📊", t: "Audit", d: "Independent assurance." },
              { icon: "🧭", t: "Consulting", d: "Strategy & forecasting." },
              { icon: "🤝", t: "Transactions", d: "Diligence & valuation." },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 p-6 bg-gradient-to-b from-slate-50 to-white hover:shadow-lg transition"
              >
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.t}</h3>
                <p className="text-slate-600 mt-1">{c.d}</p>
                <Link to="/services" className="mt-4 inline-block text-indigo-700 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with soft tint */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">What clients say</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mt-2">
            A few words from teams we support every day.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.q}
                className="bg-indigo-50 rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
              >
                <blockquote className="text-slate-800 leading-relaxed">“{t.q}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom highlights with alternating cards */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-3xl font-semibold text-slate-900">Newsroom Highlights</h2>
            <Link to="/newsroom" className="text-indigo-700 hover:underline">View all →</Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[...news, ...moreNews].map((n, i) => (
              <article
                key={i}
                className={`rounded-xl border p-5 hover:shadow-md transition ${
                  i % 2 === 0 ? "bg-white border-slate-200" : "bg-slate-50 border-slate-200"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">{n.t}</h3>
                <p className="text-sm text-slate-500 mt-1">{n.date}</p>
                <p className="text-slate-700 mt-2 text-sm">{n.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (darker, matches hero) */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-900 to-blue-800 text-white p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to move forward?</h3>
              <p className="mt-2 text-white/90">Explore careers or access your client documents.</p>
            </div>
            <div className="flex gap-3 justify-start md:justify-end flex-wrap">
              <Link className="bg-white text-indigo-900 px-5 py-2.5 rounded-lg hover:bg-slate-50 transition" to="/careers">
                Explore Careers
              </Link>
              <Link className="border border-white/70 px-5 py-2.5 rounded-lg hover:bg-white/10 transition" to="/clientportal">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PageNav (homepage uses your special placement) */}
      <PageNav next="/about" nextLabel="Next: About" isHome always />
    </div>
  );
}

export default HomePage;
