import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Layout from "./AfterLogin/components/Layout";
import Dashboard from "./AfterLogin/pages/Dashboard";
import Members from "./AfterLogin/pages/Members";
import Expenses from "./AfterLogin/pages/Expenses";
import GroupExpenses from "./AfterLogin/pages/GroupExpenses";
import Reports from "./AfterLogin/pages/Reports";

function AppContent() {
  const location = useLocation();
  const showFooter = ![
    "/register",
    "/login",
    "/Dashboard",
    "/members",
    "/expenses",
    "/group-expenses",
    "/reports",
  ].includes(location.pathname);

  const showNavBar = ![
    "/Dashboard",
    "/members",
    "/expenses",
    "/group-expenses",
    "/reports",
  ].includes(location.pathname);

  const isLoggedIn = false;
  return (
    <div className="min-h-screen flex flex-col">
      {showNavBar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route
                path="/Dashboard"
                element={
                  <Layout>
                    <Dashboard />
                  </Layout>
                }
              />
              <Route
                path="/members"
                element={
                  <Layout>
                    <Members />
                  </Layout>
                }
              />
              <Route
                path="/expenses"
                element={
                  <Layout>
                    <Expenses />
                  </Layout>
                }
              />
              <Route
                path="/group-expenses"
                element={
                  <Layout>
                    <GroupExpenses />
                  </Layout>
                }
              />
              <Route
                path="/reports"
                element={
                  <Layout>
                    <Reports />
                  </Layout>
                }
              />
            </>
          ) : (
            <>
              <Route
                path="/Dashboard"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
                      Log In to Explore, Discover, and Begin Your Journey
                    </h2>
                    <a
                      href="/login"
                      className="text-lg text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </div>
                }
              />
              <Route
                path="/members"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
                      Log In to Explore, Discover, and Begin Your Journey
                    </h2>
                    <a
                      href="/login"
                      className="text-lg text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </div>
                }
              />
              <Route
                path="/expenses"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
                      Log In to Explore, Discover, and Begin Your Journey
                    </h2>
                    <a
                      href="/login"
                      className="text-lg text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </div>
                }
              />
              <Route
                path="/group-expenses"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
                      Log In to Explore, Discover, and Begin Your Journey
                    </h2>
                    <a
                      href="/login"
                      className="text-lg text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </div>
                }
              />
              <Route
                path="/reports"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
                      Log In to Explore, Discover, and Begin Your Journey
                    </h2>
                    <a
                      href="/login"
                      className="text-lg text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </div>
                }
              />
            </>
          )}
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
