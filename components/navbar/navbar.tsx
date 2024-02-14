"use client";
import React, { useState } from "react";
import Bell from "@/asserts/bell.png";
import Light from "@/asserts/Vector.png";
import User from "@/asserts/user.png";
import DownArrow from "@/asserts/downArrow.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <nav className="h-10 sm:h-[80px] bg-white flex justify-between items-center shadow-lg px-5 sm:px-14">
      <div>
        <h1 className="sm:text-[40px]">Logs</h1>
      </div>
      <div className="hidden sm:flex items-center gap-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={Bell}
              alt="bell"
              width={10}
              height={10}
              className="w-5"
            />
            <span className="absolute bg-red-500 h-5 w-5 rounded-full flex justify-center items-center text-sm -top-3 text-white left-3">
              6
            </span>
          </div>
          <div>
            <Image
              src={Light}
              alt="light"
              width={10}
              height={10}
              className="w-5"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 font-medium text-lg">
          <div className="relative">
            <Image
              src={User}
              alt="user"
              width={50}
              height={50}
              className="rounded-full w-10 h-10 object-container"
            />
            <span className="absolute w-3 h-3 bg-green-500 rounded-full border-white right-0 bottom-0 border-2 " />
          </div>
          <div className="flex gap-2 items-center ">
            <h1>Admin</h1>
            <Image src={DownArrow} alt="arrow" width={10} height={10} />
          </div>
        </div>
      </div>
      <div className="relative sm:hidden ">
        <div onClick={handleShowNavMenu}>
          {!showNavMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
        {showNavMenu ? (
          <div className="bg-white border w-max h-max right-0 top-10 shadow-xl rounded-md absolute transform duration-1000">
            <ul className="">
              <li className="flex items-center p-2 gap-1 hover:bg-slate-200">
                <NotificationsIcon className="text-lg" />
                <span className="text-sm">Notifications</span>
              </li>
              <li className="flex items-center p-2 gap-1 hover:bg-slate-200">
                <LightModeIcon className="text-lg" />
                <span className="text-sm">Dark Mode</span>
              </li>
              <li className="flex items-center p-2 gap-1 hover:bg-slate-200">
                <div className="relative">
                  <Image
                    src={User}
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full w-5 h-5 object-container"
                  />
                </div>
                <span className="text-sm flex items-center justify-center">
                  Admin <KeyboardArrowRightIcon className="text-lg" />
                </span>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default NavBar;
