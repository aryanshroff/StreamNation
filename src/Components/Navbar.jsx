import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
        STREAM NATION
      </h1>
      <div>
        <button className="pr-4 text-white">
          Sign In
        </button>

        <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
