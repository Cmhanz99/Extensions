import React from "react";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const Nav = ({ light, setLight }) => {
  return (
    <nav
      className={`${
        light ? "bg-slate-800/90 text-white" : "bg-white border text-black"
      } w-full h-auto  py-2 px-4 rounded-lg flex justify-between items-center`}
    >
      <h2 className="text-xl font-semibold">Extensions</h2>
      <div
        onClick={() => setLight(!light)}
        className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-white"
      >
        {light ? (
          <IoSunnyOutline className="text-xl cursor-pointer" />
        ) : (
          <IoMoon className="text-xl cursor-pointer" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
