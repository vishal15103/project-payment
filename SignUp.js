import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";



function SignUp() {

  const [userId, setUserId] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();



  const handleSignUp = (e) => {

    e.preventDefault();

    if (!userId || !username || !password || !confirmPassword) {

      alert("Please fill all fields");

      return;

    }

    if (password !== confirmPassword) {

      alert("Passwords do not match!");

      return;

    }

    alert("Account created successfully!");

    navigate("/");

  };



  return (

    <div className="login-container fade">

      <div className="login-box">

        <img src={logo} alt="SCB Logo" className="logo" />

        <h2>Sign Up</h2>

        <form onSubmit={handleSignUp}>

          <div className="input-group">

            <input

              type="text"

              placeholder="User ID"

              value={userId}

              onChange={(e) => setUserId(e.target.value)}

            />

            <FaUser />

          </div>

          <div className="input-group">

            <input

              type="text"

              placeholder="Username"

              value={username}

              onChange={(e) => setUsername(e.target.value)}

            />

            <FaEnvelope />

          </div>

          <div className="input-group">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="Create Password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            />

            <FaLock />

            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}

          </div>

          <div className="input-group">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="Confirm Password"

              value={confirmPassword}

              onChange={(e) => setConfirmPassword(e.target.value)}

            />

            <FaLock />

          </div>

          <button type="submit">Sign Up</button>

        </form>

      </div>

    </div>

  );

}



export default SignUp;
