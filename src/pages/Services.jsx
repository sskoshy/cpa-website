import Navbar from '../components/Navbar';

function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">Our Services</h1>
        <p className="text-center text-gray-600 mb-12">
          We offer a range of professional services tailored to meet your financial and business needs.
        </p>

        {/* Services List */}
        <div className="grid gap-8">
          {/* Audit */}
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Audit</h2>
            <p className="text-gray-700 mb-2">
              Reliable auditing services to ensure transparency and compliance.
            </p>
            <ul className="list-disc text-gray-600 pl-6">
              <li>Financial Statement Audits – Review of company financials</li>
              <li>Internal Controls – Evaluate risks and operations</li>
              <li>Compliance Audits – Ensure regulation alignment</li>
            </ul>
          </div>

          {/* Consulting */}
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Consulting</h2>
            <p className="text-gray-700 mb-2">
              Expert guidance to help your business grow and improve efficiency.
            </p>
            <ul className="list-disc text-gray-600 pl-6">
              <li>Business Strategy – Planning and growth consulting</li>
              <li>Financial Forecasting – Budgeting & analysis</li>
              <li>Risk Management – Identify and reduce risks</li>
            </ul>
          </div>

          {/* Tax Services */}
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Tax Services</h2>
            <p className="text-gray-700 mb-2">
              Comprehensive tax solutions for individuals and businesses.
            </p>
            <ul className="list-disc text-gray-600 pl-6">
              <li>Tax Preparation – Personal and corporate returns</li>
              <li>Tax Planning – Maximize savings and avoid surprises</li>
              <li>IRS Representation – Support in audits or disputes</li>
            </ul>
          </div>

          {/* Transaction Services */}
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Transaction Services</h2>
            <p className="text-gray-700 mb-2">
              Support through business deals, mergers, and acquisitions.
            </p>
            <ul className="list-disc text-gray-600 pl-6">
              <li>Due Diligence – Financial checks before deals</li>
              <li>Valuation Services – Understand what a business is worth</li>
              <li>Deal Advisory – Structure and strategy help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

  