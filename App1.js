import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";

import LoginPage from "./components/LoginPage";

import SignUpPage from "./components/SignUpPage";

import ForgotPasswordPage from "./components/ForgotPasswordPage";

import "./App.css";



function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<WelcomePage />} />

        <Route path="/login/:role" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      </Routes>

    </Router>

  );

}



export default App;
