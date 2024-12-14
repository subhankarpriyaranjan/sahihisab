import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import NavBar from './Components/NavBar'
import AboutUs from './Components/Pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUs'
import LoginPage from './Components/Pages/LoginPage';
import SignupPage from './Components/Pages/SignupPage';

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
      </Routes>
    </Router>
  )
}

export default App
