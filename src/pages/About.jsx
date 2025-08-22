// src/pages/About.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function About() {
  const [more, setMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 text-white pt-16 px-6 pb-28 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/10/18/21/22/desk-1759935_1280.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Soft glows */}
      <div
        className="pointer-events-none -z-10 absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none -z-10 absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            Our mission is to provide exceptional accounting, tax, and consulting
            services with integrity, professionalism, and care.
          </p>
        </header>

        {/* Mission copy */}
        <section className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow p-6 text-slate-900">
          <p className="leading-relaxed">
            Founded with a passion for helping clients succeed, our firm combines
            years of expertise with a commitment to personalized service.
            {more && (
              <> We value long-term partnerships, transparent communication, and
              dependable execution across every engagement.</>
            )}
          </p>

          <button
            onClick={() => setMore((v) => !v)}
            className="mt-4 inline-block border border-slate-300 px-5 py-2.5 rounded-lg hover:bg-slate-50 transition text-slate-800"
          >
            {more ? "Read less" : "Read more"}
          </button>
        </section>

        {/* Values */}
        <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Integrity", desc: "Honest, transparent, and reliable service." },
            { title: "Expertise", desc: "Decades of combined financial knowledge." },
            { title: "Care", desc: "Personalized solutions tailored to your needs." },
            { title: "Growth", desc: "Helping clients succeed and expand confidently." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-sky-800">{item.title}</h3>
              <p className="text-slate-700 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/team"
            className="inline-block bg-white text-sky-800 px-8 py-3 rounded-lg shadow hover:bg-slate-100 transition font-medium"
          >
            Meet Our Team →
          </Link>
        </div>
      </div>

      {/* Nav */}
      <PageNav back="/" backLabel="Back: Home" next="/team" nextLabel="Next: Team" always />
    </div>
  );
}

export default About;
