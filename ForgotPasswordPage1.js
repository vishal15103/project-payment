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

      className="h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"

      style={{ backgroundImage: `url(${images[currentImage]})` }}

    >

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96">

        <div className="flex flex-col items-center">

          <img src="/logo.png" alt="SCB Logo" className="w-16 mb-3" />

          <h2 className="text-xl font-bold text-gray-800">Reset Password</h2>

        </div>



        <input

          type="text"

          placeholder="User ID"

          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />

        <input

          type="text"

          placeholder="Username"

          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />

        <input

          type="email"

          placeholder="Email"

          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />

        <input

          type="password"

          placeholder="New Password"

          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />

        <input

          type="password"

          placeholder="Confirm Password"

          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />



        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-md">

          Reset Password

        </button>



        <p className="mt-4 text-sm text-center text-gray-600">

          Back to{" "}

          <Link to="/login/user" className="text-green-600 font-medium hover:underline">

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}



export default ForgotPasswordPage;
