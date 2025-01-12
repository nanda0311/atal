import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aic, Aim, ptuLogo } from "../assets/logos/logs";
import { NavbarDemo } from "./Navbar";

const NavbarOG = () => {
  const [aimClickCount, setAimClickCount] = useState(0); // State for tracking Aim logo clicks
  const navigate = useNavigate();



  const goToHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="relative py-6 flex justify-center gap-10 items-center">
      <div className="flex gap-10 items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <div className="w-24 h-24 cursor-pointer" onClick={goToHome}>
          <img src={Aic} className="w-full h-full object-contain" alt="AIC Logo" />
        </div>
        <div className="w-24 h-24 cursor-pointer" onClick={goToHome}>
          <img src={ptuLogo} className="w-full h-full object-contain" alt="PTU Logo" />
        </div>
      </div>
      <div className="w-fit scale-95">
        <NavbarDemo />
      </div>
      <div className="w-48 h-24 flex items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <div className="w-20 h-20 cursor-pointer">
          <img src={Aim} alt="Aim Logo" className=" max-w-36 max-h-full pt-2 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default NavbarOG;