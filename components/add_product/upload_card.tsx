import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "next/image";

interface UploadCardProps {
  image: File;
}

const UploadCard: React.FC<UploadCardProps> = ({ image }) => {
  return (
    <div className="border p-4 rounded-md border-[#196FE1] flex justify-between items-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={URL.createObjectURL(image)}
          alt="img"
          width={100}
          height={100}
        />
        <div>
          <p className="font-normal text-[16px]">{image?.name}</p>
          <p className="font-normal text-[14px] text-[#333333]">
            {Math.round(image.size / 1024)}kb
          </p>
        </div>
      </div>
      <CancelOutlinedIcon className="text-red-500 cursor-pointer" />
    </div>
  );
};

export default UploadCard;
