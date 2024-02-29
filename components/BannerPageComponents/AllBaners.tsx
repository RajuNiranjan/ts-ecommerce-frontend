import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PencilIcon from "./icons/Pencil.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AllBaners = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full flex flex-col gap-[48px] px-[16px] py-[16px] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} border border-[#81b4f8] rounded-[16px] drop-shadow-md overflow-auto`} style={{scrollbarWidth: 'none'}}>
      <div className="w-full flex items-center justify-between text-[16px] font-bold gap-[10px]">
        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Title</p>

        <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">Description</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Update Date</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Image</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Details</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center">Action</p>

        <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center" />
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <div className="w-full flex items-center justify-between text-[14px] gap-[10px]">
          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">15 Aug</p>

          <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">50% Banner for 15 Aug</p>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center gap-[4px]">
            <p>15Aug.jpg</p>
            <div className="text-[#0664e0]">
              <VisibilityIcon />
            </div>
          </div>

          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">31/10/2023</p>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-[#0664e0] flex items-center gap-[4px]">
            <p>Details</p>
            <ErrorOutlineIcon />
          </div>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center text-gray-400">
            <MoreHorizIcon />
          </div>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center justify-center">
            <Image
              src={PencilIcon}
              alt="Pencli icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px] object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] gap-[10px]">
          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">15 Aug</p>

          <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">50% Banner for 15 Aug</p>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center gap-[4px]">
            <p>15Aug.jpg</p>
            <div className="text-[#0664e0]">
              <VisibilityIcon />
            </div>
          </div>

          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">31/10/2023</p>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-[#0664e0] flex items-center gap-[4px]">
            <p>Details</p>
            <ErrorOutlineIcon />
          </div>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center text-gray-400">
            <MoreHorizIcon />
          </div>

          <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center justify-center">
            <Image
              src={PencilIcon}
              alt="Pencli icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px] object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBaners;
