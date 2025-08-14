function Services() {
    const items = [
      {
        title: "Audit",
        subs: [
          { name: "Financial Statement Audits", desc: "Independent reviews to ensure accuracy and transparency." },
          { name: "Internal Controls", desc: "Evaluate processes to reduce risk and improve operations." },
          { name: "Compliance Audits", desc: "Verify adherence to regulations and industry standards." },
        ],
      },
      {
        title: "Consulting",
        subs: [
          { name: "Business Strategy", desc: "Plan for sustainable growth and operational efficiency." },
          { name: "Financial Forecasting", desc: "Create budgets and projections for informed decisions." },
          { name: "Risk Management", desc: "Identify and address potential threats to success." },
        ],
      },
      {
        title: "Tax Services",
        subs: [
          { name: "Tax Preparation", desc: "Accurate filings for individuals and businesses." },
          { name: "Tax Planning", desc: "Strategies to minimize liabilities and maximize savings." },
          { name: "IRS Representation", desc: "Support and guidance during audits or disputes." },
        ],
      },
      {
        title: "Transaction Services",
        subs: [
          { name: "Due Diligence", desc: "Thorough analysis before major business deals." },
          { name: "Valuation Services", desc: "Determine the fair market value of a business." },
          { name: "Deal Advisory", desc: "Expert advice to structure and execute transactions." },
        ],
      },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">Our Services</h1>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            We provide a full range of assurance, tax, and advisory services to help clients achieve their goals.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
                <h2 className="text-2xl font-semibold text-sky-700 mb-4">{cat.title}</h2>
                <ul className="space-y-3">
                  {cat.subs.map((s, j) => (
                    <li key={j}>
                      <p className="font-medium text-slate-800">{s.name}</p>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-10 flex justify-between">
            <a href="/team" className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">← Back</a>
            <a href="/careers" className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">Next →</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  