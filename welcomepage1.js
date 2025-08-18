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

      className="h-screen w-full bg-cover bg-center transition-all duration-1000"

      style={{ backgroundImage: `url(${images[currentImage]})` }}

    >

      {/* Top Bar */}

      <div className="flex justify-between items-center px-10 py-5 bg-black/50 text-white">

        <div className="flex items-center">

          <img src="/logo.png" alt="SCB Logo" className="w-10 mr-3" />

          <h2 className="text-lg font-bold">Standard Chartered Bank</h2>

        </div>

        <div className="space-x-6 text-sm font-medium">

          <Link to="#" className="hover:underline">Help</Link>

          <Link to="#" className="hover:underline">Contact Us</Link>

          <Link to="#" className="hover:underline">Support</Link>

          <Link to="#" className="hover:underline">About Us</Link>

        </div>

      </div>



      {/* Center Content */}

      <div className="flex flex-col items-center justify-center h-[80%] text-white text-center">

        <h1 className="text-3xl font-bold mb-3">Welcome to Standard Chartered</h1>

        <p className="mb-8 italic text-lg">

          “Do the right thing” • “Never settle” • “Better together”

        </p>



        {/* Login Options */}

        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg w-80">

          <button

            onClick={() => navigate("/login/approver")}

            className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow"

          >

            Approver Login

          </button>

          <button

            onClick={() => navigate("/login/operator")}

            className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow"

          >

            Operator Login

          </button>

          <button

            onClick={() => navigate("/login/user")}

            className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow"

          >

            User Login

          </button>

          <p className="text-sm text-gray-700 mt-2">

            Don’t have an account?{" "}

            <Link to="/signup" className="text-green-600 font-medium hover:underline">

              Sign up

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}



export default WelcomePage;
