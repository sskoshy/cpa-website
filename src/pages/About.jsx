import { useState } from "react";
import PageNav from "../components/PageNav";

function About() {
  const [more, setMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">About Us</h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 sm:mb-12">
          Our mission is to provide exceptional accounting, tax, and consulting services with integrity, professionalism, and care.
        </p>

        <p className="text-slate-600 leading-relaxed">
          Founded with a passion for helping clients succeed, our firm combines years of expertise with a commitment to personalized service.
          {more && (
            <> We value long-term partnerships, transparent communication, and dependable execution across every engagement.</>
          )}
        </p>

        <button
          onClick={() => setMore(!more)}
          className="mt-4 inline-block border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50"
        >
          {more ? "Read less" : "Read more"}
        </button>

        <div className="mt-8">
          <a href="/team" className="inline-block w-full sm:w-auto bg-sky-600 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition">
            Meet Our Team
          </a>
        </div>

        <PageNav back="/" next="/team" />
      </div>
    </div>
  );
}

export default About;
