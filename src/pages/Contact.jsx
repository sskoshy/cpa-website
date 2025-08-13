import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Contact Us</h1>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mb-6">
        <form className="space-y-4">
          <input type="text" placeholder="Your name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your email" className="w-full border p-2 rounded" />
          <textarea rows="4" placeholder="Your message" className="w-full border p-2 rounded" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
        </form>
      </div>

      {/* Back Button */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link to="/newsroom" className="inline-flex items-center bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          ← Back
        </Link>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-800">Our Office</h2>
        <p>123 Main St, Suite 100, Sacramento, CA 95814</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@cpafirm.com</p>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-3xl mx-auto h-64 bg-gray-300 flex items-center justify-center rounded">
        Google Map Placeholder
      </div>
    </div>
  );
}

export default Contact;
