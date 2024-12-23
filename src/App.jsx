import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import AboutUs from './Components/Pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUs'
import LoginPage from './Components/Pages/LoginPage';
import SignupPage from './Components/Pages/SignupPage';

import Layout from './AfterLogin/components/Layout';
import Dashboard from './AfterLogin/pages/Dashboard';
import Members from './AfterLogin/pages/Members';
import Expenses from './AfterLogin/pages/Expenses';
import GroupExpenses from './AfterLogin/pages/GroupExpenses';
import Reports from './AfterLogin/pages/Reports';

function App() {
  

  return (
    <Router>
      <NavBar />
      {/* <LogIn /> */}
      <Routes>
        <Route path="/about-us" element={<AboutUs/>} /> {/* Create a route for About Us */}
        <Route path="/home" element={<AboutUs />} /> {/* Create a route for Home */}
        <Route path="/log-in" element={<LoginPage/>} /> {/*  Create a route for LogIn */}
        <Route path="/sign-up" element={<SignupPage/>} /> {/* Create a route for SignUp */}
        <Route path="/contactus" element={<ContactUs />} /> {/* Create a route for ContactUs */}
          <Route path='/' element={<AboutUs />} />
      </Routes>
      <Layout>
        <Routes>
        <Route path="/Dashboard" element={<Dashboard />} /> 
           <Route path="/members" element={<Members />} /> 
      <Route path="/expenses" element={<Expenses />} />
         <Route path="/group-expenses" element={<GroupExpenses />} />
         <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
