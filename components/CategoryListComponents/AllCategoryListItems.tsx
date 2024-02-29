import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AllCategoryListItems = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
      className={`w-full mt-[30px] ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } rounded-[16px] drop-shadow-md px-[32px] py-[32px] flex flex-col gap-[32px]`}>
      <div className="w-full border px-[24px] py-[10px] flex items-center gap-[16px] border-[#81b4f8] text-[#b3b3b3] rounded-[8px]">
        <SearchIcon />

        <input
          type="text"
          placeholder="Search category"
          className="text-[14px] outline-none border-none bg-transparent w-full"
        />
      </div>

      <div className="w-full flex flex-col gap-[40px]">
        <div className="w-full flex flex-col gap-[16px]">
          <div className="w-full flex items-center justify-between text-[14px] gap-[10px]">
            <div className="min-w-[70px] max-w-[70px] h-[40px] flex items-center justify-center">
              <Avatar />
            </div>

            <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
              Mens clothing
            </div>

            <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
              Clothing for men
            </div>

            <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
              Clothing
            </div>

            <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center text-[16px] font-[600]">
              1000
            </div>

            <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center justify-center rounded-full bg-[#196fe1] text-white text-[16px] font-[600] cursor-pointer">
              Published
            </div>

            <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center text-[16px] font-[600] text-[#196fe1]">
              Edit
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
          <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] flex items-center gap-[10px]">
            <select name="" id="" className="py-[8px] outline-none border-none">
              <option value="">Sheet 01</option>
              <option value="">Sheet 02</option>
            </select>
          </div>

          <div className="flex items-center gap-[10px]">
            <p className="text-[14px]">500 items</p>

            <div className="flex items-center gap-[24px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                <KeyboardArrowLeftIcon />
              </div>

              <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
                <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] flex items-center gap-[10px]">
                  <select
                    name=""
                    id=""
                    className="py-[8px] outline-none border-none bg-transparent">
                    <option value="">Sheet 01</option>
                    <option value="">Sheet 02</option>
                  </select>
                </div>

                <div className="flex items-center gap-[10px]">
                  <p className="text-[14px]">500 items</p>

                  <div className="flex items-center gap-[24px]">
                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                      <KeyboardArrowLeftIcon />
                    </div>

                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                      <p>1</p>
                    </div>
                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                      <p>2</p>
                    </div>

                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                      <KeyboardArrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoryListItems;
