import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] p-3 lg:p-0 md:p-0">
      <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg px-8 py-10 w-full max-w-md shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
            {/* You can replace this with your actual logo */}
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-white text-2xl font-bold text-center mb-2">
          Log in to your account
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Welcome back! Please enter your details.
        </p>

        <div className="flex justify-between mb-6">
          <button className="w-1/2 text-white border border-gray-600 py-2 rounded-l-lg hover:bg-gray-700">
            Sign up
          </button>
          <button className="w-1/2 text-white border border-gray-600 py-2 rounded-r-lg hover:bg-gray-700 ">
            Log in
          </button>
        </div>

        <form>
          <div className="mb-4">
            <label className="text-gray-400 block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-400 block mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="text-gray-400">
              <input type="checkbox" className="mr-1" /> Remember for 30 days
            </label>
            <button className="text-purple-500 hover:underline">
              Forgot password
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-2 rounded-md font-medium"
          >
            Sign in
          </button>
        </form>

        <button className="w-full flex items-center justify-center mt-4 bg-black border border-gray-600 hover:bg-gray-800 transition text-white py-2 rounded-md">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
