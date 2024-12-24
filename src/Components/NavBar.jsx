import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              SahiHisab
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Contact Us
            </a>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <Link
            to="/register"
            className="block px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
