import PageNav from "../components/PageNav";

function Team() {
  const teamMembers = [
    { name: "...", title: "...", bio: "...", image: "...", linkedin: "..." },
    { name: "...", title: "...", bio: "...", image: "...", linkedin: "..." },
    { name: "...", title: "...", bio: "...", image: "...", linkedin: "..." },
    { name: "...", title: "...", bio: "...", image: "...", linkedin: "..." } // extra member
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-2">Our Team</h1>
        <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Meet the professionals driving our commitment to excellence.
        </p>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-sky-100 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-sky-700 font-medium">{m.title}</p>
              <p className="text-slate-700 mt-3 text-sm">{m.bio}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-sky-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-700 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <PageNav back="/about" next="/services" />
        </div>
      </div>
    </div>
  );
}

export default Team;
