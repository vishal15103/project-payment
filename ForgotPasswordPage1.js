import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";



const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];



function ForgotPasswordPage() {

  const [currentImage, setCurrentImage] = useState(0);



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

        <h2>Standard Chartered Bank - Reset Password</h2>



        <input type="text" placeholder="User ID" />

        <input type="text" placeholder="Username" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="New Password" />

        <input type="password" placeholder="Confirm Password" />



        <button>Reset Password</button>

        <p>

          Back to <Link to="/login/user">Login</Link>

        </p>

      </div>

    </div>

  );

}



export default ForgotPasswordPage;
