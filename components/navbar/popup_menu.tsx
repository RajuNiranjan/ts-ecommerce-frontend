"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";

const PopupMenu = () => {
  const [editProfileComponentShowState, setEditProfileComponentShowState] =
    useState(false);

  const iconsDetails = [
    {
      icon: <FaUser />,
      icon_name: "Edit Profile",
    },
    {
      icon: <IoIosSettings />,
      icon_name: "Account Settings",
    },
    {
      icon: <FaWallet />,
      icon_name: "Wallet",
    },
    {
      icon: <IoIosListBox />,
      icon_name: "Bills",
    },
    {
      icon: <MdHelp />,
      icon_name: "Help Center",
    },
    {
      icon: <TbLogout />,
      icon_name: "Log out",
    },
  ];

  return (
    <div
      className={`fixed top-[80px] right-[20px] z-10 w-[180px] pl-[10px] py-[30px] rounded-[8px] bg-white drop-shadow-md  transition-all duration-500`}>
      <div className="w-full flex flex-col gap-[10px]">
        {iconsDetails.map((icon, index) => (
          <div
            className="w-full flex items-center gap-[6px] cursor-pointer text-[#b3b3b3]"
            key={index}>
            <span className="text-[20px]">{icon.icon}</span>
            <p className="text-[14px]">{icon.icon_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupMenu;
