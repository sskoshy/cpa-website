// src/pages/Contact.jsx
import { useState, useMemo } from "react";
import PageNav from "../components/PageNav";

/**
 * API base:
 * - Local dev (CRA proxy): set "proxy": "http://localhost:5001" in package.json and leave REACT_APP_API_BASE unset.
 *   => calls go to relative URLs like "/api/contact".
 * - Production (GitHub Pages): set REACT_APP_API_BASE=https://YOUR-BACKEND.onrender.com in .env.production.
 *   => calls are prefixed with that URL.
 */
const RAW_BASE = (process.env.REACT_APP_API_BASE || "").trim().replace(/\/+$/, "");
const withBase = (path) => (RAW_BASE ? `${RAW_BASE}${path}` : path);

function Contact() {
  // form state
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");
  const [msg,       setMsg]       = useState("");
  const [loading,   setLoading]   = useState(false);

  // status banner
  const [status, setStatus] = useState({ type: null, text: "" });

  const max = 500;

  // Helpful hint if the site is HTTPS but API base is HTTP (mixed content is blocked)
  const httpsMixedContentHint = useMemo(() => {
    if (typeof window === "undefined") return "";
    const isHttpsPage = window.location.protocol === "https:";
    const isHttpApi   = RAW_BASE && RAW_BASE.startsWith("http://");
    if (isHttpsPage && isHttpApi) {
      return "This page is HTTPS but your API base is HTTP. Browsers block mixed content. Use HTTPS for the API or test locally at http://localhost:3000 with a dev proxy.";
    }
    return "";
  }, []);

  // Office/map
  const address = "123 Main St, Suite 100, Sacramento, CA 95814";
  const gmapsQ = encodeURIComponent(address);
  const embedSrc =
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12762.685302792023!2d-121.496!3d38.581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad10a%3A0x0000000000000000!2s${gmapsQ}!5e=1!3m2!1sen!2sus!4v=${Date.now()}`;

  const reset = () => {
    setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setMsg("");
  };

  const validate = () => {
    if (!firstName.trim() || !lastName.trim()) return "Please enter your first and last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email.";
    if (!msg.trim()) return "Please enter a message.";
    if (msg.length > max) return `Message must be ${max} characters or fewer.`;
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, text: "" });

    const problem = validate();
    if (problem) {
      setStatus({ type: "error", text: problem });
      return;
    }

    if (httpsMixedContentHint) {
      setStatus({ type: "error", text: httpsMixedContentHint });
      return;
    }

    const url = withBase("/api/contact");
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          subject: "Website Contact Form",
          message: msg.trim(),
        }),
      });

      clearTimeout(timeout);

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Not found (404). Ensure server mounts: app.use('/api', submissionsRouter) and the route is POST '/contact'.");
        }
        if (res.status === 500) {
          throw new Error(data?.error || "Server error (500). See server logs.");
        }
        throw new Error(data?.message || data?.error || `Request failed with status ${res.status}.`);
      }

      setStatus({ type: "success", text: "Thanks! Your message was sent. We’ll get back within one business day." });
      reset();
    } catch (err) {
      const msg =
        err?.name === "AbortError"
          ? "The request timed out. Is the server running?"
          : (err?.message || "Failed to send message. Check the Network tab for details.");
      setStatus({ type: "error", text: msg });
      // console.error("Contact submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 text-white pt-16 px-6 pb-28 relative">
      {/* background glows */}
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
          {/* Contact form */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow p-6 text-slate-900">
            <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>

            {/* Status bar */}
            {(status.type || httpsMixedContentHint) && (
              <div
                role="alert"
                aria-live="polite"
                className={`mt-3 rounded-lg px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {status.type ? status.text : httpsMixedContentHint}
              </div>
            )}

            <form className="mt-4 space-y-4" onSubmit={onSubmit}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto text-white px-6 py-2.5 rounded-lg transition ${
                  loading ? "bg-slate-400 cursor-not-allowed" : "bg-sky-800 hover:bg-sky-900"
                }`}
              >
                {loading ? "Sending…" : "Send Message"}
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

          {/* Map */}
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

            {/* Fallback for very old browsers */}
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

      {/* Navigation */}
      <PageNav back="/clientportal" backLabel="Back: Client Portal" always />
    </div>
  );
}

export default Contact;
