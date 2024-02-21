import React from "react";

const AddVariable = () => {
  return (
    <div>
      <div className="w-full bg-white shadow-md border rounded-md my-10 p-5">
        <h1 className="text-xl font-semibold">Add Variable</h1>
        <form className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              className="border rounded-md p-2 h-20 border-blue-300 resize-none focus:outline-none"
              placeholder="enter description"></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label>Tags</label>
            <textarea
              name=""
              id=""
              className="border rounded-md p-2 h-20 border-blue-300 resize-none focus:outline-none"
              placeholder="enter Tags"></textarea>
          </div>
          <div className="flex gap-10">
            <button className="bg-[#B3B3B3] px-3 py-2 text-[12px] sm:px-3 sm:py-2  lg:px-6 lg:py-3 rounded-full font-normal sm:text-[14px] lg:text-[16px] text-white">
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-[#196FE1] px-3 py-2 text-[12px] sm:px-3 sm:py-2 sm:text-[14px]  lg:px-6 lg:py-3 rounded-full font-normal lg:text-[16px] text-white">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVariable;
