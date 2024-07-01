import React from "react";
// import FrontImage from "../../assets/fro";
import { useAuth0 } from "@auth0/auth0-react";

const Home = ({ user }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="h-full flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div className="text-lg font-semibold">voteChain</div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600">
              How to Vote
            </a>
            <a href="#" className="text-gray-600">
              About Us
            </a>
            {user ? (
              <li>
                <button
                  className="px-4 py-2 bg-green-700 text-white rounded-md"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </button>
              </li>
            ) : (
              <div>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                <div className=" py-2 px-2 bg-blue-300 rounded-md"></div>
              </div>
            )}
            {/* <div className=" py-2 px-2 bg-blue-300 rounded-md">
            </div> */}
            {/* {isAuthenticated ? (
                <li>
                  <button
                    className="px-4 py-2 bg-green-700 text-white rounded-md"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )} */}
          </div>
        </div>
        <div className="bg-green-200 p-6 rounded-lg mb-6">
          <div>
            {" "}
            <h1 className="text-4xl font-bold text-green-800">Vote Today.</h1>
            <p className="text-gray-700 mt-4">
              With votechain, you can vote Securely, Transparently, and
              Privately, putting back the power in your hands.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="px-4 py-2 bg-green-700 text-white rounded-md">
                Register
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center bg-green-800 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-white">
            <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              ✔
            </span>
            <span>Faster Voting Process</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              ✔
            </span>
            <span>Verifiable Transactions</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              ✔
            </span>
            <span>Secured by 256 bit Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
