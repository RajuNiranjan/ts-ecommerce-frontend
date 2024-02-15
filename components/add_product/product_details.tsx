import Input from "@/ui/input";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React from "react";

interface InputItem {
  id: string;
  type: string;
  lableName: string;
  placeholder: string;
  name: string;
  rightIcon?: React.ReactNode;
}

const InputData: InputItem[] = [
  {
    id: "Product Name",
    type: "text",
    lableName: "Product Name",
    placeholder: "men",
    name: "men",
  },
  {
    id: "Stock Keeping Unit (SKU)",
    type: "text",
    lableName: "Stock Keeping Unit (SKU)",
    placeholder: "Shoe",
    name: "men",
  },
  {
    id: "Category",
    type: "text",
    lableName: "Category",
    placeholder: "men",
    name: "men",
  },
  {
    id: "Sub Category",
    type: "text",
    lableName: "Sub Category",
    placeholder: "Shoe",
    name: "men",
  },
  {
    id: "stock Qty",
    type: "text",
    lableName: "stock Qty",
    placeholder: "1000",
    name: "men",
  },
  {
    id: "Products type",
    type: "text",
    lableName: "Products type",
    placeholder: "External Product",
    name: "men",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "price(MRP)",
    type: "text",
    lableName: "price(MRP)",
    placeholder: "1231",
    name: "men",
  },
  {
    id: "selling price/discount",
    type: "text",
    lableName: "selling price/discount",
    placeholder: "1000/15%",
    name: "men",
  },
];

const ProducDetails: React.FC = () => {
  return (
    <div className="w-[766px] bg-white p-5 rounded-md shadow-lg ">
      <h1 className="font-semibold text-[18px]">Product Details</h1>
      <form className="my-5">
        <div className="grid grid-cols-2 gap-4">
          {InputData?.map((item, index) => (
            <Input
              key={index}
              lableName={item?.lableName}
              placeholder={item?.placeholder}
              name={item?.name}
              type={item?.type}
              rightIcon={item?.rightIcon}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 my-5">
          <div className="flex flex-col">
            <label>Description</label>
            <textarea
              className="border rounded-md h-24 focus:outline-none p-2 border-blue-300 resize-none"
              placeholder="Write description..."
            />
          </div>
          <div className="flex flex-col">
            <label>Tags</label>
            <textarea
              className="border rounded-md h-24 focus:outline-none p-2 border-blue-300 resize-none"
              placeholder="Write description..."
            />
          </div>
        </div>
        <div className="flex gap-10">
          <button className="bg-[#B3B3B3] px-6 py-3 rounded-full font-normal text-[16px] text-white">
            Save Draft
          </button>
          <button className="bg-[#196FE1] px-6 py-3 rounded-full font-normal text-[16px] text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProducDetails;
