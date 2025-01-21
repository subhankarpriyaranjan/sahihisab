import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Features', href: '#features', icon: ChartBarIcon },
  { name: 'About', href: '#about', icon: InformationCircleIcon },
  { name: 'Team', href: '#team', icon: UserGroupIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-md'
      : 'bg-transparent'
  }`;

  const logoClasses = `text-2xl font-bold ${
    scrolled ? 'text-primary-600' : 'text-primary-500'
  }`;

  const linkClasses = `inline-flex items-center px-3 py-2 text-sm font-medium transition-colors ${
    scrolled
      ? 'text-gray-700 hover:text-primary-600'
      : 'text-gray-100 hover:text-white'
  }`;

  const mobileMenuClasses = `
    fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <motion.div
              className="flex flex-shrink-0 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className={logoClasses}>
                SahiHisab
              </Link>
            </motion.div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={linkClasses}
                >
                  <item.icon className="h-5 w-5 mr-1.5" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              className={`${
                scrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-gray-100 hover:text-white'
              } px-3 py-2 text-sm font-medium transition-colors hidden sm:block`}
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="ml-4 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors hidden sm:inline-flex"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={mobileMenuClasses}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <div className="relative bg-white h-full w-64 shadow-xl">
              <div className="px-4 pt-5 pb-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    SahiHisab
                  </div>
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded-md"
                    >
                      <item.icon className="h-5 w-5 mr-3" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to="/login"
                      className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded-md"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="block w-full px-4 py-2 mt-3 text-center text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-md"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
