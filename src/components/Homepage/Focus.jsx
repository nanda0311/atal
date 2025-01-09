import React from "react";
import { iot, uav, emb } from "../../assets/Homepage/images"; // Ensure these paths are correct

export const Focus = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Focus Area
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg">
          <div className="w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={iot}
              alt="IoT"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Apply
          </button>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg">
          <div className="w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={uav}
              alt="UAV"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Apply
          </button>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg">
          <div className="w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={emb}
              alt="Embedded"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Focus;
