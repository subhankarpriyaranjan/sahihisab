import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Expenses', href: '/expenses' },
  { name: 'Reports', href: '/reports' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  const getContextualButtons = () => {
    const path = location.pathname;
    
    // Only show relevant buttons based on current path
    switch (path) {
      case '/guestRegister':
        return (
          <Link
            to="/guestLogin"
            className="block w-full text-left px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Login as Guest
          </Link>
        );
      case '/guestLogin':
        return (
          <Link
            to="/guestRegister"
            className="block w-full text-left px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Register as Guest
          </Link>
        );
      case '/login':
        return (
          <Link
            to="/register"
            className="block w-full text-left px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        );
      case '/register':
        return (
          <Link
            to="/login"
            className="block w-full text-left px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        );
      
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src="/logo.png"
                alt="Sahi Hisab"
              />
              <span className="ml-2 text-xl sm:text-2xl font-bold text-white">
                Sahi Hisab
              </span>
            </Link>
          </div>

          

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center">
            {getContextualButtons()}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

    
      
    </nav>
  );
};

export default NavBar;
