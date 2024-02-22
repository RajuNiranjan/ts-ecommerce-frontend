import React from "react";
import { MdOutlinePhoto } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const VariableListCard = () => {
  return (
    <div className="my-4 flex justify-between items-center">
      <div>
        <h1>Black</h1>
      </div>
      <div className="flex items-center justify-between">
        <MdOutlinePhoto className="text-[40px]" />
        <MdOutlinePhoto className="text-[40px]" />
        <MdOutlinePhoto className="text-[40px]" />
        <MdOutlinePhoto className="text-[40px]" />
        <MdOutlinePhoto className="text-[40px]" />
        <MdOutlinePhoto className="text-[40px]" />
      </div>
    </div>
  );
};

export default VariableListCard;

//  <div className="bg-[#b3b3b3b3]">
//           <MdOutlinePhoto className="text-[40px]" />
//         </div>
//         <div className="flex flex-col">
//           <h1 className="text-[16px] font-medium">Product Name</h1>
//           <p className="text-[14px] font-normal">Size, Color</p>
//         </div>
//  <div className="mx-5">
//           <IoMdInformationCircleOutline className="text-[24px] text-blue-400" />
//         </div>
//         <div>
//           <div className="flex items-center justify-center">
//             <MdCurrencyRupee className="text-[18px] font-medium" />
//             <h1 className="text-xl text-[16px] font-semibold">231</h1>
//           </div>
//           <p className="text-green-500 font-semibold text-[16px]">Delivered</p>
//         </div>
