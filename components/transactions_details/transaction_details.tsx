import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const TrasactionDetails = () => {
  return (
    <div>
      <div className="w-full bg-white border shadow-md rounded-md p-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-[14px]">Transaction From</h3>
              <h1 className="font-semibold text-[24px]">Admin</h1>
            </div>
            <h3 className="text-[14px] flex gap-2 items-center ">
              <span>Transaction ID</span>
              <span className="text-[#196FE1] font-semibold">65431</span>
            </h3>
            <h3 className="text-[14px]">
              Transaction Date-15 May 2023 8:59 Pm
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-[14px]">Transaction To</h3>
              <h1 className="font-semibold text-[24px]">OKP.LMT</h1>
            </div>
            <h3 className="text-[14px] flex gap-2 items-center">
              <span>Transaction ID</span>
              <span className="text-[#196FE1] font-semibold">65431</span>
            </h3>
            <h3 className="text-[14px]">
              Transaction Date-15 May 2023 8:59 Pm
            </h3>
          </div>
        </div>
        <div className="flex justify-end my-5">
          <button className="flex items-center gap-1 bg-[#196FE1]  text-white font-semibold rounded-md py-1 px-2 text-[16px]">
            <MdOutlineFileDownload className="font-semibold text-xl" />
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrasactionDetails;
