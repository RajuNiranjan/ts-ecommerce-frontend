"use client";
import Input from "@/ui/input";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React, { useState } from "react";

interface InputItem {
  id?: string;
  type: string;
  labelName: string;
  placeholder: string;
  value: string;
  name: string;
  rightIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: InputItem[] = [
  {
    id: "Product Name",
    type: "text",
    labelName: "Product Name",
    placeholder: "men",
    value: "prductname",
    name: "prductname",
  },
  {
    id: "Stock Keeping Unit (SKU)",
    type: "text",
    labelName: "Stock Keeping Unit (SKU)",
    placeholder: "Shoe",
    value: "units",
    name: "units",
  },
  {
    id: "Category",
    type: "text",
    labelName: "Category",
    placeholder: "men",
    value: "category",
    name: "category",
  },
  {
    id: "Sub Category",
    type: "text",
    labelName: "Sub Category",
    placeholder: "Shoe",
    value: "subCategory",
    name: "subCategory",
  },
  {
    id: "stock Qty",
    type: "text",
    labelName: "stock Qty",
    placeholder: "1000",
    value: "stockQty",
    name: "stockQty",
  },
  {
    id: "Products type",
    type: "text",
    labelName: "Products type",
    placeholder: "External Product",
    value: "productType",
    name: "productType",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "price(MRP)",
    type: "text",
    labelName: "price(MRP)",
    placeholder: "1231",
    value: "price",
    name: "price",
  },
  {
    id: "selling price/discount",
    type: "text",
    labelName: "selling price/discount",
    placeholder: "1000/15%",
    value: "discount",
    name: "discount",
  },
];

const ProducDetails: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const onChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);

    /// store data in local storage

    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({});
  };
  return (
    <div className="w-[766px] bg-white p-5 rounded-md shadow-lg ">
      <h1 className="font-semibold text-[18px]">Product Details</h1>
      <form className="my-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {InputData?.map((item, index) => (
            <Input
              key={index}
              labelName={item?.labelName}
              value={formData[item?.name] || ""}
              placeholder={item?.placeholder}
              name={item?.name}
              type={item?.type}
              rightIcon={item?.rightIcon}
              onChange={onChange}
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
          <button
            type="submit"
            className="bg-[#196FE1] px-6 py-3 rounded-full font-normal text-[16px] text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProducDetails;
