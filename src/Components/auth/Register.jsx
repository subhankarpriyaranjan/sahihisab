import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateName,
} from "../../utils/validation";
import { registerUser } from "../../utils/api";
import Alert from "../ui/Alert";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.firstName)) {
      newErrors.firstName = "First name must be at least 2 characters";
    }
    if (!validateName(formData.lastName)) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!validatePhone(formData.number)) {
      newErrors.number = "Please enter a valid 10-digit phone number";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setAlert(null);

    try {
      const { confirmPassword, number, ...rest } = formData;
      const dataToSend = { ...rest, mobile: number, IsActive: 1 };

      const response = await registerUser(dataToSend);
      console.log("Response status: ", response.status);

      if (!response || !response.headers) {
        throw new Error("Invalid response from server");
      }

      const contentType = response.headers.get("content-type");
      let responseData;

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json(); // Parse JSON response body
      } else {
        responseData = await response.text(); // Parse as text if not JSON
      }

      // Log the response for debugging
      console.log("Response Data: ", responseData);
      setAlert({
        type: "success",
        message: "Registration successful! Please Wait...",
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message || "Registration failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => `
    peer w-full border-b-2 
    ${errors[fieldName] ? "border-red-500" : "border-gray-300"} 
    bg-transparent pt-4 pb-1.5 text-gray-900 
    placeholder-transparent focus:border-indigo-600 
    focus:outline-none
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 pt-16 pb-8 px-4">
      <div className="max-w-md mx-auto mt-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
            Create Account
          </h2>

          {alert && <Alert type={alert.type} message={alert.message} />}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={getInputClassName("firstName")}
                  placeholder="First Name"
                  disabled={isSubmitting}
                />
                <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                  First Name
                </label>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={getInputClassName("lastName")}
                  placeholder="Last Name"
                  disabled={isSubmitting}
                />
                <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                  Last Name
                </label>
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName("email")}
                placeholder="Email"
                disabled={isSubmitting}
              />
              <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={getInputClassName("number")}
                placeholder="Phone Number"
                disabled={isSubmitting}
              />
              <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                Phone Number
              </label>
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">{errors.number}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={getInputClassName("password")}
                placeholder="Password"
                disabled={isSubmitting}
              />
              <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={getInputClassName("confirmPassword")}
                placeholder="Confirm Password"
                disabled={isSubmitting}
              />
              <label className="absolute left-0 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
