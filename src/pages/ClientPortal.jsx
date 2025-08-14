import { useState } from "react";

function ClientPortal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // mock loading
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Client Portal</h1>
        <p className="text-gray-600 mb-6">Log in to securely access your documents and reports.</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-20"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="button"
            onClick={onLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-sm text-gray-600">Need to access a specific document?</p>
          <button type="button" onClick={() => {}} className="text-blue-600 hover:underline text-sm">
            Click here to access your reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientPortal;
