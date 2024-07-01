import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useGoogleOAuth } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { loginWithRedirect, loginWithPopup, logout, isAuthenticated } =
    useAuth0();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <div className="flex justify-center mb-4">
          <span className="text-xl font-semibold">Welcome</span>
          {/* <span className="text-gray-600">Login | Signup</span> */}
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Signup
            </a>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() =>
                loginWithRedirect({
                  connection: "google-oauth2",
                })
              }
            >
              <FcGoogle className="flex text-center justify-start size-6 p-0.5 m-0.25" />{" "}
              Continue with Google
            </button>
          </div>
          <div>
            <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FaGithub className="flex text-center justify-start size-6 p-0.5 m-0.25" />
              Continue with GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
