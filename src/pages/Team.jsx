// src/pages/Team.jsx
import PageNav from "../components/PageNav";

function Team() {
  return (
    <div className="relative min-h-screen pt-16 pb-28 text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-indigo-900 via-sky-800/90 to-sky-700" />

      {/* Subtle Team Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/03/02/02/13/startup-3192204_1280.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Soft Glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-[26rem] h-[26rem] bg-white/10 blur-3xl rounded-full -z-10" />
      <div className="pointer-events-none absolute -bottom-40 -right-28 w-[30rem] h-[30rem] bg-sky-200/10 blur-3xl rounded-full -z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mt-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Meet the Team</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Get to know the experts behind our firm’s success.
          </p>
        </header>

        {/* Team Members Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson, CPA",
              role: "Managing Partner",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "James Carter",
              role: "Senior Tax Advisor",
              img: "https://randomuser.me/api/portraits/men/44.jpg",
            },
            {
              name: "Emily Davis",
              role: "Audit Manager",
              img: "https://randomuser.me/api/portraits/women/47.jpg",
            },
            {
              name: "David Kim",
              role: "Consulting Specialist",
              img: "https://randomuser.me/api/portraits/men/36.jpg",
            },
            {
              name: "Laura Chen",
              role: "Client Relations",
              img: "https://randomuser.me/api/portraits/women/55.jpg",
            },
            {
              name: "Michael Brown",
              role: "Financial Analyst",
              img: "https://randomuser.me/api/portraits/men/19.jpg",
            },
          ].map((person) => (
            <div
              key={person.name}
              className="bg-white/90 backdrop-blur rounded-2xl shadow border border-white/40 text-center p-6 hover:shadow-lg transition"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow"
              />
              <h3 className="mt-4 text-lg font-semibold text-sky-800">
                {person.name}
              </h3>
              <p className="text-slate-600 text-sm">{person.role}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/90 mb-4">Want to work with us?</p>
          <a
            href="/careers"
            className="inline-block bg-white text-sky-800 px-8 py-3 rounded-lg shadow hover:bg-slate-100 transition font-medium"
          >
            View Careers →
          </a>
        </div>
      </div>

      {/* Navigation */}
      <PageNav back="/about" backLabel="Back: About Us" next="/services" nextLabel="Next: Services" always />
    </div>
  );
}

export default Team;
