import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GuestRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [guestData, setGuestData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && !/^\d*$/.test(value)) {
      return; // Only allow digits for mobile
    }
    setGuestData({ ...guestData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1 && !guestData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (step === 2) {
      if (!guestData.mobile.trim()) {
        toast.error('Please enter your mobile number');
        return;
      }
      if (!guestData.email.trim()) {
        toast.error('Please enter your email');
        return;
      }
      
      try {
        const response = await axios.post('/api/Account/GuestUser', guestData);
        if (response.data.success) {
          toast.success('Account created successfully!');
          toast.info('Please login with your email and mobile number', {
            autoClose: 6000
          });
          navigate('/guestLogin');
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      }
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-gray-900">
            Create Guest Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 sm:space-y-6">
            {step === 1 ? (
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  value={guestData.name}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <>
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
                    value={guestData.email}
                    onChange={handleChange}
                  />
                </div>
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
                    value={guestData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              {step === 1 ? 'Next' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>

      {/* Fixed Bottom Buttons - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 flex gap-2">
        <Link
          to="/guestLogin"
          className="flex-1 flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
        >
          Login as Guest
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

export default GuestRegister;
