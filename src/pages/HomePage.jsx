import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center px-4 text-center bg-white">
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-6">
          Welcome to Our CPA Firm
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          We offer trusted tax, audit, and consulting services to help you succeed with confidence.
        </p>
        <div className="mt-12">
          <a href="#services" className="text-blue-600 underline text-lg hover:text-blue-800">
            Learn more ↓
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our firm offers Tax Planning, Audit Services, Business Consulting, and Transaction Support
          designed to empower your financial success.
        </p>
      </div>

      {/* Newsroom Highlights */}
      <div className="bg-gray-100 py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Newsroom Highlights</h2>
        <div className="space-y-4 max-w-2xl mx-auto text-left">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800">
              CPA Firm Named Top Accounting Firm of 2025
            </h3>
            <p className="text-sm text-gray-600">
              Jul 15, 2025 – We're honored to be recognized for our dedication to client success and innovation.
            </p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800">
              Upcoming Webinar: Tax Tips for Small Businesses
            </h3>
            <p className="text-sm text-gray-600">
              Jul 30, 2025 – Join us for expert insights on navigating the upcoming tax season with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Get Involved</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Discover exciting career opportunities or access your client documents through our secure portal.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/careers" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Explore Careers
          </a>
          <a href="/clientportal" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition">
            Access Client Portal
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold mb-2">CPA Firm, Inc.</p>
          <p className="mb-2">123 Main St, Suite 100, Sacramento, CA 95814</p>
          <p className="mb-2">Email: info@cpafirm.com | Phone: (123) 456-7890</p>
          <div className="mt-4 space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div> 
  );
}

export default HomePage;