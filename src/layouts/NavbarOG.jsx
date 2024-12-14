import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aic, Aim, ptuLogo } from "../assets/logos/logs";
import { NavbarDemo } from "./Navbar";

const NavbarOG = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for popup visibility
  const [aimClickCount, setAimClickCount] = useState(0); // State for tracking Aim logo clicks
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setAimClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setShowLoginPopup(true); // Show login popup on the third click
        return 0; // Reset count
      }
      return newCount;
    });
  };

  const closePopup = () => {
    setShowLoginPopup(false); // Close the popup
  };

  const goToHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="relative py-6 flex justify-center gap-10 items-center">
      <div className="flex gap-10 items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <div className="w-16 h-16 cursor-pointer" onClick={goToHome}>
          <img src={Aic} className="w-full h-full object-contain" alt="AIC Logo" />
        </div>
        <div className="w-16 h-16 cursor-pointer" onClick={goToHome}>
          <img src={ptuLogo} className="w-full h-full object-contain" alt="PTU Logo" />
        </div>
      </div>
      <div className="w-fit scale-95">
        <NavbarDemo />
      </div>
      <div className="max-w-32 h-16 flex items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <div className="w-16 h-16 cursor-pointer" onClick={handleLogoClick}>
          <img src={Aim} alt="Aim Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {showLoginPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closePopup}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarOG;
