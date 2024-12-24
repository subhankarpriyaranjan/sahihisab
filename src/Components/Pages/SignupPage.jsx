

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  // Initial form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    isActive: 1,
  });

  // State for error, success message, and loading indicator
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset feedback states
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character."
      );
      setIsLoading(false);
      return;
    }

    try {
      // Fetch API for registration
      const response = await fetch(
        "https://localhost:44316/api/Registration/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobile: formData.number, // Backend expects 'mobile'
            password: formData.password,
            isActive: formData.isActive,
          }),
        }
      );

      // Check if response is OK
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server Error: ${errorMessage}`);
      }

      const data = await response.json();
      setIsLoading(false);

      // Success handling
      setSuccessMessage("Registration successful! Redirecting to login...");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
        isActive: 1,
      });
      setTimeout(() => navigate("/log-in"), 2000);
    } catch (error) {
      // Error handling
      setIsLoading(false);
      console.error('Registration Error:', error);
      setError('An error occurred during registration. Please try again.');
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
              {/* First Name */}
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
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

              {/* Last Name */}
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
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

              {/* Email */}
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
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

              {/* Mobile */}
              <div className="mt-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Mobile No.
                </label>
                <input
                  name="number"
                  type="tel"
                  pattern="[0-9]{10}"
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  placeholder="Enter mobile number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mt-4 relative">
                <label className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle input type
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 pr-10 " // Added `pr-10` for eye icon spacing
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pt-7 pr-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  {showPassword ? (
                    <i className="fas fa-eye text-gray-600 " /> // Eye open (show password)
                  ) : (
                    <i className="fas fa-eye-slash text-gray-600" /> // Eye closed (hide password)
                  )}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="mt-4 relative">
                <label className="block text-white text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"} // Toggle input type
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 pr-10" // Added `pr-10` for eye icon spacing
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pt-7 pr-4 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle showConfirmPassword state
                >
                  {showConfirmPassword ? (
                    <i className="fas fa-eye text-gray-600" /> // Eye open (show password)
                  ) : (
                    <i className="fas fa-eye-slash text-gray-600" /> // Eye closed (hide password)
                  )}
                </span>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-500 text-sm mt-4">{successMessage}</p>
            )}

            {/* Terms and Conditions */}
            <div className="flex items-center mt-8">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
                required
              />
              <label htmlFor="terms" className="text-white ml-3 block text-sm">
                I accept the{" "}
                <a
                  href="#"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Register
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{" "}
                <Link to="/log-in">
                  <span className="text-yellow-400 font-semibold hover:underline">
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
