import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { Home1, Home2, Home3 } from "../../assets/Homepage/images";

const Landing = () => {
  return (
    <div className="pb-20 min-h-screen">
      <div className="absolute border-4 border-gray-300 rounded-full min-h-screen min-w-[1000px] -left-[700px] top-0 -z-10"></div>
      <div className="absolute border-4 border-gray-300 rounded-full min-h-screen min-w-[1000px] -right-[700px] top-0 -z-10"></div>
      <div className="mt- text-gray-700">
        <h1 className="font-semibold text-6xl text-center  title">
          Atal Incubation center
        </h1>
        <h4 className="mt-4 text-xl text-center title ">
          Fueling Innovations, Empowering startups
        </h4>
      </div>
      <div className="mt-5 bg-customBlue font-semibold  text-lg px-10 py-3 text-white max-w-fit rounded-full mx-auto">
        <Link>Apply for Incubation</Link>
      </div>
      <div className="flex justify-center gap-16 px-32 mt-5 " id="cards">
        <Tilt style={{ width: 1300 }}>
          <div className=" w-full max-h-80 rounded-3xl bg-customBlue overflow-hidden shadow-2xl shadow-customBlue">
            <img
              src={Home1}
              alt=""
              className="w-full h-full object-cover rounded-2xl max-h-64 min-h-64"
            />
          </div>
        </Tilt>

        <Tilt>
          <div className=" w-full rounded-3xl bg-customBlue shadow-2xl shadow-customBlue">
            <img
              src={Home2}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </Tilt>
        <Tilt style={{ width: 1300 }}>
          <div className="max-h-64 min-h-64 max-w-[800px] w-full rounded-3xl bg-customBlue shadow-2xl shadow-customBlue">
            <img
              src={Home3}
              alt=""
              className="w-full h-full object-cover rounded-2xl max-h-64 min-h-64"
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Landing;
