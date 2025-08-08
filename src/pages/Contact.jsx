function Contact() {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Contact Us</h1>
  
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white shadow rounded p-6 mb-12">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
  
        {/* Contact Info */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Office</h2>
          <p className="text-gray-700">123 Main St, Suite 100, Sacramento, CA 95814</p>
          <p className="text-gray-700 mt-1">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Email: info@cpafirm.com</p>
        </div>
  
        {/* Google Map Placeholder */}
        <div className="max-w-3xl mx-auto">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded text-gray-600">
            Google Map Placeholder
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  