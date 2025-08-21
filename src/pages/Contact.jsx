// src/pages/Contact.jsx
import { useState } from "react";
import PageNav from "../components/PageNav";

function Contact() {
  const [msg, setMsg] = useState("");
  const max = 500;

  // Update this to your real address if needed
  const address = "123 Main St, Suite 100, Sacramento, CA 95814";
  const gmapsQ = encodeURIComponent(address);
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12762.685302792023!2d-121.496!3d38.581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad10a%3A0x0000000000000000!2s${gmapsQ}!5e=1!3m2!1sen!2sus!4v${Date.now()}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 text-white pt-16 px-6 pb-28 relative">
      {/* soft glows to match home/about */}
      <div className="absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            We’d love to hear from you. Send a note and we’ll get back within one business day.
          </p>
        </header>

        {/* Grid: form + map */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact form (glassy card) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow p-6 text-slate-900">
            <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <div>
                <textarea
                  rows={5}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value.slice(0, max))}
                  placeholder="Your message"
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <div className="text-right text-xs text-slate-500 mt-1">
                  {msg.length}/{max}
                </div>
              </div>

              <button className="w-full sm:w-auto bg-sky-800 text-white px-6 py-2.5 rounded-lg hover:bg-sky-900 transition">
                Send Message
              </button>
            </form>

            {/* Office info */}
            <div className="mt-6 text-slate-700">
              <h3 className="text-slate-900 font-semibold">Our Office</h3>
              <p className="mt-1">{address}</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@cpafirm.com</p>
            </div>
          </div>

          {/* Interactive map (responsive, rounded) */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow p-3">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                title="BlueOak CPA - Map"
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-xl"
                allowFullScreen
              />
            </div>

            {/* Map actions */}
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${gmapsQ}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-800 border border-slate-200 hover:bg-slate-50 transition"
              >
                Open in Google Maps
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${gmapsQ}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-800 text-white hover:bg-sky-900 transition"
              >
                Directions →
              </a>
            </div>

            {/* Fallback for very old browsers / no iframes */}
            <noscript>
              <div className="mt-3 text-slate-800">
                JavaScript is disabled. See directions on{" "}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${gmapsQ}`}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                </a>.
              </div>
            </noscript>
          </div>
        </div>
      </div>

      {/* Fixed Back/Next with clear labels (optional—keep if you’re still using PageNav) */}
      <PageNav back="/clientportal" backLabel="Back: Client Portal" always />

    </div>
  );
}

export default Contact;
