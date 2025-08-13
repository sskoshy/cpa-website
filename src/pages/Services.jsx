import PageNav from "../components/PageNav";

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Overview */}
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-3">Our Services</h1>
        <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          We provide a full range of assurance, tax, and advisory services to help clients achieve their goals.
        </p>

        {/* Main Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCategory
            title="Audit"
            items={[
              { name: "Financial Statement Audits", desc: "Independent reviews to ensure accuracy and transparency." },
              { name: "Internal Controls", desc: "Evaluate processes to reduce risk and improve operations." },
              { name: "Compliance Audits", desc: "Verify adherence to regulations and industry standards." },
            ]}
          />
          <ServiceCategory
            title="Consulting"
            items={[
              { name: "Business Strategy", desc: "Plan for sustainable growth and operational efficiency." },
              { name: "Financial Forecasting", desc: "Create budgets and projections for informed decisions." },
              { name: "Risk Management", desc: "Identify and address potential threats to success." },
            ]}
          />
          <ServiceCategory
            title="Tax Services"
            items={[
              { name: "Tax Preparation", desc: "Accurate filings for individuals and businesses." },
              { name: "Tax Planning", desc: "Strategies to minimize liabilities and maximize savings." },
              { name: "IRS Representation", desc: "Support and guidance during audits or disputes." },
            ]}
          />
          <ServiceCategory
            title="Transaction Services"
            items={[
              { name: "Due Diligence", desc: "Thorough analysis before major business deals." },
              { name: "Valuation Services", desc: "Determine the fair market value of a business." },
              { name: "Deal Advisory", desc: "Expert advice to structure and execute transactions." },
            ]}
          />
        </div>

        {/* Navigation Buttons (place outside the grid) */}
        <div className="mt-10">
          <PageNav back="/team" next="/careers" />
        </div>
      </div>
    </div>
  );
}

function ServiceCategory({ title, items }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
      <h2 className="text-2xl font-semibold text-sky-700 mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <p className="font-medium text-slate-800">{item.name}</p>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
