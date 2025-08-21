// src/pages/Services.jsx
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";

function Services() {
  const items = [
    {
      key: "audit",
      title: "Audit",
      hero:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      subs: [
        { name: "Financial Statement Audits", desc: "Independent reviews to ensure accuracy and transparency." },
        { name: "Internal Controls", desc: "Evaluate processes to reduce risk and improve operations." },
        { name: "Compliance Audits", desc: "Verify adherence to regulations and industry standards." },
      ],
    },
    {
      key: "consulting",
      title: "Consulting",
      hero:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      subs: [
        { name: "Business Strategy", desc: "Plan for sustainable growth and operational efficiency." },
        { name: "Financial Forecasting", desc: "Create budgets and projections for informed decisions." },
        { name: "Risk Management", desc: "Identify and address potential threats to success." },
      ],
    },
    {
      key: "tax",
      title: "Tax Services",
      hero:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      subs: [
        { name: "Tax Preparation", desc: "Accurate filings for individuals and businesses." },
        { name: "Tax Planning", desc: "Strategies to minimize liabilities and maximize savings." },
        { name: "IRS Representation", desc: "Support and guidance during audits or disputes." },
      ],
    },
    {
      key: "transactions",
      title: "Transaction Services",
      hero:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      subs: [
        { name: "Due Diligence", desc: "Thorough analysis before major business deals." },
        { name: "Valuation Services", desc: "Determine the fair market value of a business." },
        { name: "Deal Advisory", desc: "Expert advice to structure and execute transactions." },
      ],
    },
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = `svc-${hash.replace("#", "")}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-sky-400");
      const t = setTimeout(() => el.classList.remove("ring-2", "ring-sky-400"), 1200);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 text-white pt-16 pb-28 relative">
      {/* decorative background */}
      <div className="pointer-events-none -z-10 absolute -top-40 -left-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
      <div className="pointer-events-none -z-10 absolute -bottom-40 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="text-center text-white/90 max-w-2xl mx-auto mt-4">
            Assurance, tax, and advisory services delivered with clarity and care.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["On-time delivery", "Senior attention", "Security first", "Scalable approach"].map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 text-slate-800"
            >
              {t}
            </span>
          ))}
        </div>

        {/* service cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((cat) => (
            <article
              id={`svc-${cat.key}`}
              key={cat.key}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow hover:shadow-lg transition"
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={cat.hero}
                  alt={`${cat.title} cover`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h2 className="absolute bottom-3 left-4 text-white text-2xl font-semibold drop-shadow">
                  {cat.title}
                </h2>
              </div>

              <div className="p-6 text-slate-900">
                <ul className="space-y-3">
                  {cat.subs.map((s) => (
                    <li key={s.name} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-700" />
                      <div>
                        <p className="font-medium">{s.name}</p>
                        <p className="text-sm text-slate-700">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* only contact CTA remains */}
                <div className="mt-5 flex justify-end">
                  <Link
                    to={`/contact?interest=${encodeURIComponent(cat.title)}`}
                    className="text-slate-700 bg-white/90 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-white"
                  >
                    Ask about {cat.title}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* process section */}
        <section className="mt-12 grid lg:grid-cols-3 gap-6">
          {[
            { t: "Discover", d: "We align on goals, timelines, and scope with a clear kickoff." },
            { t: "Deliver", d: "An organized, transparent workflow—no surprises, just progress." },
            { t: "Debrief", d: "We review outcomes and plan next steps to keep momentum." },
          ].map((s) => (
            <div
              key={s.t}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow p-6 text-center text-slate-900"
            >
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="text-slate-700 mt-1 text-sm">{s.d}</p>
            </div>
          ))}
        </section>

        <PageNav back="/team" backLabel="Back: Team" next="/careers" nextLabel="Next: Careers" always />
      </div>
    </div>
  );
}

export default Services;
