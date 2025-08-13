import PageNav from "../components/PageNav";

function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Join Our Team
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        At our firm, we value collaboration, growth, and a commitment to excellence. 
        Discover what it’s like to work with a team that’s passionate about helping clients succeed.
      </p>

      {/* Job Openings */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-xl font-semibold text-blue-800">Staff Accountant</h3>
          <p className="text-gray-600">
            Help clients manage their finances and prepare accurate financial reports.
          </p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-xl font-semibold text-blue-800">Tax Associate</h3>
          <p className="text-gray-600">
            Support individuals and businesses with tax planning and filing.
          </p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-xl font-semibold text-blue-800">Audit Intern</h3>
          <p className="text-gray-600">
            Gain experience assisting audit teams in financial reviews and compliance.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-4">Interested in applying or learning more?</p>
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact HR
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10">
        <PageNav back="/services" next="/clientportal" />
      </div>
    </div>
  );
}

export default Careers;
