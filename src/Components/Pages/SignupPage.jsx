import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://your-api-url.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          number: formData.number,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError(data.message || "An error occurred during registration.");
      }
    } catch (error) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#4e504e] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-500">
                Create an account
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  First Name
                </label>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="text"
                  name="firstName"
                  placeholder="Enter First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
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
                  name="lastName"
                  placeholder="Enter Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  value={formData.number}
                  onChange={handleInputChange}
                  required
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
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-white text-sm text-left font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
                required
              />
              <label
                htmlFor="remember-me"
                className="text-white ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="text-yellow-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Register
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{" "}
                <Link to="/log-in">
                  <span className="text-yellow-400 font-semibold hover:underline ml-1">
                    Login here
                  </span>
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
