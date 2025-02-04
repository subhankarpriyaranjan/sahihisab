import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GuestLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && !/^\d*$/.test(value)) {
      return; // Only allow digits for mobile
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.mobile.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/api/Account/GuestLogin', formData);
      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
        toast.success('Login successful!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-gray-900">
            Login as Guest
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="mobile" className="block text-sm sm:text-base font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                required
                maxLength="10"
                className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Fixed Bottom Buttons - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 flex gap-2">
        <Link
          to="/guestRegister"
          className="flex-1 flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
        >
          Register as Guest
        </Link>
        <Link
          to="/"
          className="flex-1 flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>

      {/* Add padding at the bottom on mobile to account for fixed buttons */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default GuestLoginPage;
