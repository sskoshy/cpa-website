import PageNav from "../components/PageNav";

function Newsroom() {
  const articles = [
    { title: "CPA Firm Recognized as Top Accounting Leader", date: "Aug 1, 2025", summary: "Our firm was honored for excellence in client service and professional standards.", category: "Consulting" },
    { title: "Webinar Recap: Mid-Year Tax Planning Tips", date: "Jul 22, 2025", summary: "Key takeaways on deductions, estimated payments, and planning ahead for year-end.", category: "Tax" },
    { title: "Guide: Preparing for Your First Audit", date: "Jul 10, 2025", summary: "A quick checklist to help businesses get organized and reduce audit stress.", category: "Audit" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Newsroom</h1>

        {/* Search + Filter */}
        <div className="flex gap-3 mb-8">
          <input type="text" placeholder="Search..." className="border p-2 flex-1 rounded" />
          <select className="border p-2 rounded">
            <option>All</option>
            <option>Tax</option>
            <option>Audit</option>
            <option>Consulting</option>
          </select>
        </div>

        {/* Articles */}
        {articles.map((a, i) => (
          <div key={i} className="bg-white p-5 rounded shadow-sm mb-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <span className="text-xs bg-sky-50 px-2 py-1 rounded">{a.category}</span>
            </div>
            <p className="text-sm text-gray-500">{a.date}</p>
            <p className="mt-2">{a.summary}</p>
            <button
              type="button"
              onClick={() => {}}
              className="text-sky-600 hover:underline"
            >
              Read more
            </button>
          </div>
        ))}

        {/* Back / Next buttons with extra space */}
        <div className="mt-10 flex justify-between px-8">
          <div className="flex-1">
            <PageNav back="/clientportal" />
          </div>
          <div className="flex justify-end flex-1">
            <PageNav next="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsroom;
