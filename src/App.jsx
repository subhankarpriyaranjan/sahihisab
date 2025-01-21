import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Layout from "./AfterLogin/components/Layout";
import Dashboard from "./AfterLogin/pages/Dashboard";
import Members from "./AfterLogin/pages/Members";
import Expenses from "./AfterLogin/pages/Expenses";
import GroupExpenses from "./AfterLogin/pages/GroupExpenses";
import Reports from "./AfterLogin/pages/Reports";

// Login prompt component for unauthorized users
const LoginPrompt = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
      Log In to Explore, Discover, and Begin Your Journey
    </h2>
    <a
      href="/login"
      className="text-lg text-center font-semibold text-white bg-primary-600 hover:bg-primary-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
    >
      Login
    </a>
  </div>
);

// Protected route wrapper component
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <LoginPrompt />;
  }
  return <Layout>{children}</Layout>;
};

// Routes configuration
const routes = [
  { path: "/Dashboard", component: Dashboard },
  { path: "/members", component: Members },
  { path: "/expenses", component: Expenses },
  { path: "/group-expenses", component: GroupExpenses },
  { path: "/reports", component: Reports },
];

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Define paths where footer and navbar should be hidden
  const protectedPaths = routes.map(route => route.path);
  const noFooterPaths = ["/register", "/login", ...protectedPaths];
  
  const showFooter = !noFooterPaths.includes(location.pathname);
  const showNavBar = !protectedPaths.includes(location.pathname);

  // Check for token on mount and route changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && protectedPaths.includes(location.pathname)) {
      // If no token and trying to access protected route, redirect to login
      navigate('/login');
    } else if (token) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {showNavBar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
          />

          {/* Protected routes */}
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize login state from localStorage
    return !!localStorage.getItem("token");
  });

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

export default App;
