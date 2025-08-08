import React from 'react';

function ClientPortal(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-blue-900 mb-2 text-center">Client Portal</h1>
                <p className="text-gray-600 mb-6 text-center">
                    Log in to securely access your documents and reports.
                </p>

                {/* Mock Login Form */}
                <form className="spcae-y-4">
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded focus :outline-none focus:ring-2 focus:ring-blue-400"
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

                {/* CTA */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Need to access a specific document?</p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline text-sm"
                    >
                        Click here to access your reports

                    </a>
                </div>
            </div>
        </div>
    )
}

export default ClientPortal