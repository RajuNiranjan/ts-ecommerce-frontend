import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const UploadCard = () => {
  return (
    <div className="border p-4 rounded-md border-[#196FE1] flex justify-between items-center">
      <div className="flex items-center justify-center gap-2">
        <PhotoIcon className="text-[55px] text-gray-500 " />
        <div>
          <p className="font-normal text-[16px]">bag packer front.png</p>
          <p className="font-normal text-[14px] text-[#333333]">231kb</p>
        </div>
      </div>
      <CancelOutlinedIcon className="text-red-500 cursor-pointer" />
    </div>
  );
};

export default UploadCard;
