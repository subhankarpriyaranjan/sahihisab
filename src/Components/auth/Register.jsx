import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateName,
} from "../../utils/validation";
import { registerUser } from "../../utils/api";
import Alert from "../ui/Alert";
import GoogleSignInButton from "./GoogleSignInButton";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    
    // For mobile number, only allow digits
    if (name === 'number') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: numbersOnly,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleKeyPress = (e) => {
    // Allow only numbers for mobile input
    if (e.target.name === 'number') {
      const charCode = e.which ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      }
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

      
      if (!response || !response.headers) {
        throw new Error("Invalid response from server");
      }

      const contentType = response.headers.get("content-type");
      let responseData;

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
        responseData = await response.json();
      } else {
        responseData = await response.text();
        responseData = await response.text();
      }

      toast.success("🎉 Registration successful! Please log in.", {
        position: "top-right",
        autoClose: 3000,
      });

      setAlert({
        type: "success",
        message: "Registration successful! Please Wait...",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSuccess = async (response) => {
    try {
      toast.success("🎉 Google Sign-In successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google Sign-In failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const getInputClassName = (fieldName) => `
    peer w-full border-2 rounded-lg px-4
    ${
      errors[fieldName]
        ? "border-red-300 focus:border-red-500"
        : "border-gray-200 focus:border-indigo-500"
    } 
    bg-white py-2.5 text-gray-900 
    placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200
    transition-all duration-200
    block w-full px-4 py-3 pl-11
    rounded-lg border
    ${errors[fieldName] ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"}
    bg-white/50 backdrop-blur-sm
    text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 
    ${errors[fieldName] ? "focus:ring-red-200" : "focus:ring-indigo-200"}
    transition-all duration-200
    disabled:opacity-50
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <Link
          to="/login"
          className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
        >
          Sign in
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create Account
              </h2>
              <p className="text-gray-600">
                Join us today and start managing your expenses
              </p>
            </div>

            {alert && <Alert type={alert.type} message={alert.message} />}
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50">
          {alert && <Alert type={alert.type} message={alert.message} />}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={getInputClassName("firstName")}
                    placeholder="John"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={getInputClassName("firstName")}
                  placeholder="Enter first name"
                  disabled={isSubmitting}
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={getInputClassName("lastName")}
                    placeholder="Doe"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={getInputClassName("lastName")}
                  placeholder="Enter last name"
                  disabled={isSubmitting}
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClassName("email")}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName("email")}
                placeholder="name@company.com"
                disabled={isSubmitting}
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className={getInputClassName("number")}
                  placeholder="1234567890"
                  disabled={isSubmitting}
                />
                {errors.number && (
                  <p className="mt-1 text-sm text-red-600">{errors.number}</p>
                )}
              </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={getInputClassName("number")}
                placeholder="1234567890"
                disabled={isSubmitting}
                autoComplete="tel"
                maxLength="10"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              {errors.number && (
                <p className="mt-1 text-sm text-red-500">{errors.number}</p>
              )}
            </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={getInputClassName("password")}
                  placeholder="••••••••"
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={getInputClassName("password")}
                placeholder="••••••••"
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
                )}
              </button>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={getInputClassName("confirmPassword")}
                  placeholder="••••••••"
                  disabled={isSubmitting}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={getInputClassName("confirmPassword")}
                placeholder="••••••••"
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">
                  Or continue with
                </span>
              </div>
            </div>

            <div>
              <GoogleSignInButton
                onSuccess={handleGoogleSuccess}
                className="w-full !bg-white !text-gray-700 border-2 border-gray-200 hover:!bg-gray-50 hover:border-gray-300 !shadow-sm"
                isRegisterPage={true}
              />
            </div>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
