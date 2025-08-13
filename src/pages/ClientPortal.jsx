import PageNav from "../components/PageNav";

function ClientPortal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Content Box */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Client Portal</h1>
        <p className="text-gray-600 mb-6">
          Log in to securely access your documents and reports.
        </p>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Extra Link (button for accessibility) */}
        <div className="mt-6">
          <p className="text-sm text-gray-600">Need to access a specific document?</p>
          <button
            type="button"
            onClick={() => {}}
            className="text-blue-600 hover:underline text-sm"
          >
            Click here to access your reports
          </button>
        </div>
      </div>

      {/* Edge-positioned Back / Next */}
      <PageNav back="/careers" next="/newsroom" />
    </div>
  );
}

export default ClientPortal;
