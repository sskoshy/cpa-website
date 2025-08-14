import PageNav from "../components/PageNav";

function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-6">
        Join Our Team
      </h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
        We value collaboration, growth, and a commitment to excellence. 
        Explore open positions and see how you can be part of our success story.
      </p>

      {/* Job Openings */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Staff Accountant",
            desc: "Manage client finances, prepare accurate reports, and ensure compliance."
          },
          {
            title: "Tax Associate",
            desc: "Assist individuals and businesses with tax planning and filing."
          },
          {
            title: "Audit Intern",
            desc: "Support audit teams with financial reviews and compliance checks."
          },
          {
            title: "Financial Analyst",
            desc: "Analyze data, create forecasts, and provide strategic recommendations."
          },
          {
            title: "HR & Recruitment Coordinator",
            desc: "Help us find and onboard top talent to grow our team."
          },
          {
            title: "Marketing Intern",
            desc: "Assist in creating campaigns, social media content, and brand materials."
          }
        ].map((job, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold text-sky-700">{job.title}</h3>
            <p className="text-slate-600 mt-2 text-sm">{job.desc}</p>
            <a
              href="/contact"
              className="inline-block mt-4 text-sky-600 hover:underline"
            >
              Apply →
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 bg-sky-50 p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Not seeing the right role?
        </h2>
        <p className="text-slate-600 mt-2">
          We’re always open to meeting talented people who share our vision.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-sky-600 text-white px-6 py-2 rounded-lg shadow hover:bg-sky-700 transition"
        >
          Contact HR
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-12">
        <PageNav back="/services" next="/clientportal" />
      </div>
    </div>
  );
}

export default Careers;
