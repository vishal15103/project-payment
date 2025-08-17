import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import bg1 from "../assets/bg1.jpg";

import bg2 from "../assets/bg2.jpg";

import bg3 from "../assets/bg3.jpg";

import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";



const backgrounds = [bg1, bg2, bg3];



function Login() {

  const [bgIndex, setBgIndex] = useState(0);

  const [userId, setUserId] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();



  useEffect(() => {

    const interval = setInterval(() => {

      setBgIndex((prev) => (prev + 1) % backgrounds.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);



  const handleLogin = (e) => {

    e.preventDefault();

    if (userId && username && password) {

      alert("Login successful!");

    } else {

      alert("Please fill all fields");

    }

  };



  return (

    <div

      className="login-container fade"

      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}

    >

      <div className="login-box">

        <img src={logo} alt="SCB Logo" className="logo" />

        <h2>Login</h2>

        <p className="description">Secure payment services for your banking needs</p>

        <form onSubmit={handleLogin}>

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

              placeholder="Username or Email"

              value={username}

              onChange={(e) => setUsername(e.target.value)}

            />

            <FaEnvelope />

          </div>

          <div className="input-group">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="Password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            />

            {showPassword ? (

              <FaEyeSlash onClick={() => setShowPassword(false)} />

            ) : (

              <FaEye onClick={() => setShowPassword(true)} />

            )}

          </div>

          <div className="options">

            <label>

              <input

                type="checkbox"

                checked={remember}

                onChange={(e) => setRemember(e.target.checked)}

              />

              Remember me

            </label>

            <span onClick={() => navigate("/forgot-password")}>Forgot password?</span>

          </div>

          <button type="submit">Login</button>

        </form>

        <p>

          Don’t have an account?{" "}

          <span onClick={() => navigate("/signup")}>Sign Up</span>

        </p>

      </div>

    </div>

  );

}



export default Login;
