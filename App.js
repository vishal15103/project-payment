import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";

import SignUp from "./components/SignUp";

import ForgotPassword from "./components/ForgotPassword";

import "./App.css";



function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>

    </Router>

  );

}



export default App;
