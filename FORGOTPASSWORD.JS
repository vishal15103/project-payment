import React, { useState, useEffect } from "react";

import "./LoginPage.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";



function ForgotPasswordPage() {

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);



  const backgrounds = [

    "/images/bg_1.jpeg",

    "/images/bg2.jpeg",

    "/images/bg3.jpeg",

    "/images/bg_4.jpeg"

  ];



  useEffect(() => {

    const interval = setInterval(() => {

      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);

    }, 4000);

    return () => clearInterval(interval);

  }, [backgrounds.length]);



  const handleReset = (e) => {

    e.preventDefault();

    alert("Password reset successful!");

  };



  return (

    <div

      className="login-container"

      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}

    >

      <div className="main-content" style={{ justifyContent: "center" }}>

        <div className="login-box">

          <h2>Forgot Password</h2>

          <form onSubmit={handleReset}>

            <input type="text" placeholder="User ID" required />



            <div className="password-container">

              <input

                type={passwordVisible ? "text" : "password"}

                placeholder="New Password"

                required

              />

              <span

                className="toggle-password"

                onClick={() => setPasswordVisible(!passwordVisible)}

              >

                {passwordVisible ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>



            <div className="password-container">

              <input

                type={confirmPasswordVisible ? "text" : "password"}

                placeholder="Confirm Password"

                required

              />

              <span

                className="toggle-password"

                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}

              >

                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>



            <button className="login-btn" type="submit">

              Reset Password

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}



export default ForgotPasswordPage;
