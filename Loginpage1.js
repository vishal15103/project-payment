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

      className="h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"

      style={{ backgroundImage: `url(${images[currentImage]})` }}

    >

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96">

        <div className="flex flex-col items-center">

          <img src="/logo.png" alt="SCB Logo" className="w-16 mb-2" />

          <h2 className="text-xl font-bold text-gray-800">Standard Chartered Bank</h2>

          <p className="text-sm text-gray-500 mb-6">{role.toUpperCase()} Login</p>

        </div>



        <input

          type="text"

          placeholder="User ID / Username / Email"

          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

        />



        <div className="relative mb-4">

          <input

            type={showPassword ? "text" : "password"}

            placeholder="Password"

            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"

          />

          <span

            onClick={() => setShowPassword(!showPassword)}

            className="absolute right-3 top-3 text-gray-600 cursor-pointer"

          >

            {showPassword ? <FaEyeSlash /> : <FaEye />}

          </span>

        </div>



        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">

          <label>

            <input type="checkbox" className="mr-2" /> Remember Me

          </label>

          <Link to="/forgot-password" className="text-green-600 hover:underline">

            Forgot Password?

          </Link>

        </div>



        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-md">

          Login

        </button>



        <p className="mt-4 text-sm text-center text-gray-600">

          Don’t have an account?{" "}

          <Link to="/signup" className="text-green-600 font-medium hover:underline">

            Sign up

          </Link>

        </p>

      </div>

    </div>

  );

}



export default LoginPage;
