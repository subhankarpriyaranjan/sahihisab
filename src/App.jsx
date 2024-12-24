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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
      <Routes>
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
      </Routes>
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
