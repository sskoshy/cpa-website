import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [msg, setMsg] = useState("");
  const max = 500;

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-8">Contact Us</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mb-6">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input required type="text" placeholder="Your name" className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input required type="email" placeholder="Your email" className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div>
            <textarea
              rows="4"
              value={msg}
              onChange={(e) => setMsg(e.target.value.slice(0, max))}
              placeholder="Your message"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="text-right text-xs text-slate-500 mt-1">{msg.length}/{max}</div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>

      {/* Gray back button under the box */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link to="/newsroom" className="inline-flex items-center bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          ← Back
        </Link>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-800">Our Office</h2>
        <p>123 Main St, Suite 100, Sacramento, CA 95814</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@cpafirm.com</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded text-gray-600">
          Google Map Placeholder
        </div>
      </div>
    </div>
  );
}

export default Contact;
