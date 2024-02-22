import React from "react";
import { MdPhoto } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const VarationDetails = () => {
  return (
    <div>
      <div className="w-full bg-white shadow-md border rounded-md my-10 p-5">
        <h1 className="text-xl font-semibold">Variation Details</h1>
        <form className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between items-center   gap-5">
            <div className="flex-1 flex flex-col gap-1">
              <label className="capitalize font-normal text-[16px]">
                Variable Name
              </label>
              <div className="border border-blue-300 flex items-center p-2 rounded-md w-full">
                <input
                  className="focus:outline-none flex-1 bg-transparent"
                  placeholder="enter variable name"
                />
              </div>
            </div>
            <div className="flex-1  flex flex-col gap-1">
              <label className="capitalize font-normal text-[16px]">
                Property
              </label>
              <div className="border border-blue-300 flex items-center p-2 rounded-md w-full">
                <input
                  className="focus:outline-none flex-1 bg-transparent"
                  placeholder="enter property"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              className="border rounded-md p-2 h-20 border-blue-300 resize-none focus:outline-none"
              placeholder="enter description"></textarea>
          </div>
          <div className="border h-20 p-3 rounded-md border-blue-300 flex justify-between items-center">
            {/* <label>Tags</label>
            <textarea
              name=""
              id=""
              className="border rounded-md p-2 h-20 border-blue-300 resize-none focus:outline-none"
              placeholder="enter Tags"></textarea> */}
            <div className="flex justify-between items-center gap-1">
              <MdPhoto className="text-4xl" />
              <div>
                <p className="text-[16px] font-normal">image.png</p>
                <p className="text-[14px] font-normal">231 KB</p>
              </div>
            </div>
            <div>
              <RxCrossCircled className="text-red-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-10">
            <button className="bg-[#B3B3B3] px-3 py-2 text-[12px] sm:px-3 sm:py-2  lg:px-6 lg:py-3 rounded-full font-normal sm:text-[14px] lg:text-[16px] text-white xl:px-10">
              Cancle
            </button>
            <button
              type="submit"
              className="bg-[#196FE1] px-3 py-2 text-[12px] sm:px-3 sm:py-2 sm:text-[14px]  lg:px-6 lg:py-3 rounded-full font-normal lg:text-[16px] text-white">
              Add Variable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VarationDetails;
