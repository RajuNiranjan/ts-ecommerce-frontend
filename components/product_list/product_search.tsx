"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useRouter } from "next/navigation";

const Productsearch = () => {
  const navigate = useRouter();
  const navgateToAddProduct = () => {
    navigate.push("/add_product");
  };
  return (
    <div className="flex w-full sm:w-full lg:w-[800px] gap-2 md:gap-5 xl:w-[993px] items-center justify-between my-14">
      <div className="w-[150px] sm:w-[300px] lg:w-[400px] xl:w-[600px] border  border-blue-400 sm:h-10 rounded-full flex items-center px-3">
        <SearchIcon className="text-slate-500 text-[14px] h-7 sm:text-xl" />
        <input
          type="text"
          placeholder="Search Product"
          className="flex-1 h-full px-1 text-[12px] sm:text-[14px] bg-transparent focus:outline-none"
        />
      </div>
      <div>
        <button className="font-normal w-[90px] sm:w-[110px] md:w-[150px] lg:w-44 h-[30px] rounded-full px-2 text-[10px] sm:text-[12px] md:text-[14px] bg-[#196FE1] sm:h-10 sm:px-2 lg:px-6 flex justify-center items-center text-white sm:rounded-full">
          search product
        </button>
      </div>
      <div
        className="font-normal  sm:w-[120px] md:w-[160px] lg:w-44   rounded-full  w-[100px] h-[30px] bg-[#196FE1] sm:h-10 md:px-6 flex justify-center items-center text-white sm:rounded-full gap-1"
        onClick={navgateToAddProduct}>
        <ControlPointIcon className="text-[14px] sm:text-xl" />
        <button className="text-[10px] sm:text-[12px] md:text-[14px]">
          Add product
        </button>
      </div>
    </div>
  );
};

export default Productsearch;
