import React from 'react'
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div class="font-[sans-serif] bg-white md:h-screen">
      <div class="grid md:grid-cols-2 items-center gap-8 h-full">
        <div class="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            class="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div class="flex items-center md:p-8 p-6 bg-[#4e504e] h-full lg:w-11/12 lg:ml-auto">
          <form class="max-w-lg w-full mx-auto ">
            <div class="mb-12">
              <h3 class="text-3xl font-bold text-yellow-500">
                Create an account
              </h3>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  First Name
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="text"
                  placeholder="Enter First name"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="text"
                  placeholder="Enter last name"
                  required
                />
              </div>


              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter email"
                />
              </div>



              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Mobile No.
                </label>
                <input
                  name="number"
                  type="number"
                 className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="mt-4">
              <label className="block text-white text-sm text-left font-bold mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                 className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter password"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  name="cpassword"
                  type="password"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter confirm password"
                />
              </div>
            </div>

            <div class="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 shrink-0 rounded"
              />
              <label for="remember-me" class="text-white ml-3 block text-sm">
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  class="text-yellow-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div class="mt-12">
              <button
                type="button"
                class="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Register
              </button>
              <p class="text-sm text-white mt-8">
                Already have an account?{" "}
                <Link to="/log-in">
                  <a
                    href="javascript:void(0);"
                    class="text-yellow-400 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
