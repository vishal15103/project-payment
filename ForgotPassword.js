import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";



function ForgotPassword() {

  const [userId, setUserId] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();



  const handleCreate = (e) => {

    e.preventDefault();

    if (newPassword !== confirmPassword) {

      alert("Passwords do not match!");

    } else {

      alert("Password updated successfully!");

      navigate("/");

    }

  };



  return (

    <div className="login-container fade">

      <div className="login-box">

        <img src={logo} alt="SCB Logo" className="logo" />

        <h2>Reset Password</h2>

        <form onSubmit={handleCreate}>

          <div className="input-group">

            <input

              type="text"

              placeholder="User ID"

              value={userId}

              onChange={(e) => setUserId(e.target.value)}

            />

          </div>

          <div className="input-group">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="New Password"

              value={newPassword}

              onChange={(e) => setNewPassword(e.target.value)}

            />

            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}

          </div>

          <div className="input-group">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="Confirm Password"

              value={confirmPassword}

              onChange={(e) => setConfirmPassword(e.target.value)}

            />

          </div>

          <button type="submit">Create New Password</button>

        </form>

      </div>

    </div>

  );

}



export default ForgotPassword;
