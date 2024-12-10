import React from "react";
import { NavLink } from "react-router-dom";
import { Aic, Aim, ptuLogo } from "../assets/logos/logs";
import { NavbarDemo } from "./Navbar";

const NavbarOG = () => {
  return (
    <div className="py-6 flex justify-center gap-10 items-center">
      <div className="flex gap-10 items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <div className="w-16 h-16  ">
          <img src={Aic} className="w-full h-full object-contain" />
        </div>
        <div className="w-16 h-16 ">
          <img src={ptuLogo} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-fit scale-95">
        <NavbarDemo />
      </div>
      {/*
      <div className="border-b-4 rounded-3xl border-customBlue pt-2 pb-5">
        <nav className="flex justify-center my-auto gap-20 text-xl font-semibold text-gray-500  px-10 ">
          <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Incubation</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Contact Us</NavLink>
        </nav>
      </div>
          */}
      <div className="max-w-32 h-16 flex items-center border-b-4 rounded-3xl border-customBlue px-5 bg-white">
        <img src={Aim} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default NavbarOG;
