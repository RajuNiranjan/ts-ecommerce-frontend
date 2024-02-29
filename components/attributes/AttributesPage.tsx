"use client";
import AddNewAttribute from "@/components/add_new_attribute/add_new_attribute";
import AttributeTable from "@/components/attributes/attribute_table";
import SearchAttribute from "@/components/attributes/search_attribute";
import React, { useState } from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SelectComponent from "@/ui/selectComponent";
import PaginationRounded from "@/ui/pagination";

const TableHeadData = ["Name", "Description", "Values", "Action"];

const TableBodyData = [
  {
    name: "Size",
    description: "Different size for clothes",
    value: [
      {
        value: "S",
      },
      {
        value: "M",
      },
      {
        value: "XL",
      },
    ],
    action: (
      <p className="font-bold text-blue-500 cursor-pointer text-semibold w-max px-2 rounded-full py-1">
        Edit
      </p>
    ),
  },
  {
    name: "Color",
    description: "childer, Watches",
    value: [
      {
        value: "Red",
      },
      {
        value: "Yellow",
      },
      {
        value: "Blue",
      },
    ],
    action: (
      <p className="font-bold text-blue-500 cursor-pointer text-semibold w-max px-2 rounded-full  py-1">
        Edit
      </p>
    ),
  },
];

const AttributesPage = () => {
  const [showAddAttribute, setShowAssAttribute] = useState<Boolean>(false);

  const handleOpenAddAttribute = () => {
    setShowAssAttribute(!showAddAttribute);
  };

  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] xl:pb-[20px]">
        <div className="w-full relative">
          <div className="flex justify-between items-center">
            <h1 className="text-[24px] xl:text-4xl font-semibold">
              Attributes
            </h1>
            <div>
              <button
                onClick={handleOpenAddAttribute}
                className="bg-blue-500 px-3 py-1 xl:px-0 xl:py-0 xl:w-[203px] xl:h-[40px] text-[14px] xl:text-[16px] rounded-full font-semibold text-white">
                Add New Attributes
              </button>
            </div>
          </div>
          <div className="w-full bg-white rounded-md shadow-md p-5 my-10 overflow-auto">
            <SearchAttribute />
            <AttributeTable headers={TableHeadData} data={TableBodyData} />
          </div>
          {/* <div className="absolute -top-10 flex justify-center items-center w-full  "> */}
          {showAddAttribute && (
            <div className=" w-full h-full p-2 fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50  top-0 z-10 flex justify-center items-center">
              <div className="bg-white p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border ">
                <AddNewAttribute
                  handleOpenAddAttribute={handleOpenAddAttribute}
                />
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AttributesPage;

{
  /* <div className=" w-full h-full p-2 fixed inset-0 bg-black bg-opacity-50  top-0 z-10 flex justify-center items-center">
  <div className="bg-white p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border ">
    <AddNewTax handleAddNewTax={handleAddNewTax} />
  </div>
</div>;


<div className="w-full xl:w-[1000px] xl:h-[500px] rounded-md shadow-xl bg-white p-10  mt-10">
                <AddNewAttribute
                  handleOpenAddAttribute={handleOpenAddAttribute}
                />
              </div> */
}
