import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";



const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];



function WelcomePage() {

  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();



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

        {/* Top Navigation */}

        <div style={{ display: "flex", justifyContent: "space-between" }}>

          <div style={{ display: "flex", alignItems: "center" }}>

            <img src="/logo.png" alt="SCB Logo" width="50" />

            <h2 style={{ marginLeft: "10px" }}>Standard Chartered Bank</h2>

          </div>

          <div>

            <Link to="#">Help</Link> | <Link to="#">Contact Us</Link> |{" "}

            <Link to="#">Support</Link> | <Link to="#">About Us</Link>

          </div>

        </div>



        {/* Center Content */}

        <h1>Welcome to Standard Chartered</h1>

        <p>“Do the right thing” | “Never settle” | “Better together”</p>



        {/* Login Options */}

        <div style={{ marginTop: "50px" }}>

          <button onClick={() => navigate("/login/approver")}>

            Approver Login

          </button>

          <button onClick={() => navigate("/login/operator")}>

            Operator Login

          </button>

          <button onClick={() => navigate("/login/user")}>User Login</button>

          <p>

            Don’t have an account? <Link to="/signup">Sign up</Link>

          </p>

        </div>

      </div>

    </div>

  );

}



export default WelcomePage;

