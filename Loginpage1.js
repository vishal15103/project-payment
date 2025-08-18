import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";



const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];



function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const { role } = useParams();



  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) => (prev + 1) % images.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);



  return (

    <div

      className="bg-slideshow"

      style={{ backgroundImage: `url(${images[currentImage]})` }}

    >

      <div className="container">

        <img src="/logo.png" alt="SCB Logo" width="70" />

        <h2>Standard Chartered Bank</h2>

        <h3>{role.toUpperCase()} LOGIN</h3>



        <input type="text" placeholder="User ID / Username / Email" />

        <div style={{ position: "relative" }}>

          <input

            type={showPassword ? "text" : "password"}

            placeholder="Password"

          />

          <span

            onClick={() => setShowPassword(!showPassword)}

            style={{

              position: "absolute",

              right: "10px",

              top: "8px",

              cursor: "pointer",

            }}

          >

            {showPassword ? <FaEyeSlash /> : <FaEye />}

          </span>

        </div>



        <div>

          <input type="checkbox" /> Remember Me

          <Link to="/forgot-password" style={{ marginLeft: "20px" }}>

            Forgot Password?

          </Link>

        </div>



        <button>Login</button>

        <p>

          Don’t have an account? <Link to="/signup">Sign up</Link>

        </p>

      </div>

    </div>

  );

}



export default LoginPage;
