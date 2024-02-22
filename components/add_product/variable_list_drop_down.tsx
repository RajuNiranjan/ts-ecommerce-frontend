"use client";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import VariableListCard from "./variable_list_card";

const VariableListDropDown = () => {
  const [showData, setShowData] = useState(false);
  const handleShowDropMenu = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <div className="w-full h-10 bg-blue-300 rounded-md flex justify-between items-center px-3">
        <h1 className="font-medium">Colors</h1>
        <div onClick={handleShowDropMenu} className="cursor-pointer">
          {showData ? (
            <FaAngleUp className="text-xl" />
          ) : (
            <FaAngleDown className="text-xl" />
          )}
        </div>
      </div>
      {showData ? <VariableListCard /> : ""}
    </div>
  );
};

export default VariableListDropDown;
