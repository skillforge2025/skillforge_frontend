import React from "react";

const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
            🟣
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white text-center">
          Create an account
        </h2>
        <p className="text-sm text-neutral-400 text-center mb-6">
          Start your 30-day free trial.
        </p>

        <div className="flex mb-6 border border-neutral-700 rounded-lg overflow-hidden">
          <button className="w-1/2 py-2 text-neutral-400 font-medium bg-neutral-900 border-r hover:text-white hover:bg-gray-800 border-neutral-700 focus:outline-none">
            Sign up
          </button>
          <button className="w-1/2 py-2 text-neutral-400 hover:bg-gray-800 hover:text-white focus:outline-none">
            Log in
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-neutral-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-1 w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <ul className="text-sm text-neutral-400 space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Must be at least 8
              characters
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Must contain one special
              character
            </li>
          </ul>

          <button
            type="submit"
            className="w-full mt-2 py-2 bg-violet-600 text-white font-medium rounded-md hover:bg-violet-700 transition duration-300"
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
