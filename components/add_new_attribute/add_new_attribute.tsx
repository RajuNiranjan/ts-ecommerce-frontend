"use client";
import Input from "@/ui/input";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

interface AddNewAttributeProps {
  handleOpenAddAttribute: () => void;
}

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
    id: "New Attribute Name",
    type: "text",
    labelName: "New Attribute Name",
    placeholder: "Category Name",
    value: "New Attribute Name",
    name: "New Attribute Name",
  },
  {
    id: "Value",
    type: "text",
    labelName: "Value",
    placeholder: "None",
    value: "value",
    name: "value",
  },
  {
    id: "Description",
    type: "text",
    labelName: "Description",
    placeholder: "None",
    value: "Description",
    name: "Description",
  },
];

const AddNewAttribute: React.FC<AddNewAttributeProps> = ({
  handleOpenAddAttribute,
}) => {
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

    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({});
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Add New Attributes</h1>
        <div className="">
          <RxCross1
            className="font-bold cursor-pointer text-xl"
            onClick={handleOpenAddAttribute}
          />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3 my-5">
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
        <div className="my-5">
          <button
            type="submit"
            className="bg-blue-500 w-[203px] h-[40px] text-[16px] rounded-md font-semibold text-white">
            Add New Attributes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAttribute;
