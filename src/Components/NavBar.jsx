import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ImageLogo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex h-[70px] items-center bg-[#2F2883] overflow-visible justify-between px-30 w-full overflow-x-hidden">
      <div>
        <img
          src={ImageLogo}
          className="h-[100px] w-[120px] absolute top-[40px] z-20 "
        />
      </div>
      <div className="flex gap-4 text-white">
        <Link to="/">Home</Link>
        {/* <Link to="/projects" href="#projects"> */}
        <div className="flex gap-4 text-white">
          <a href="#projects">Projects</a>
        </div>
        <div className="flex gap-4 text-white">
          <a href="#about">About us</a>
        </div>

        <div className="flex gap-4 text-white">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
