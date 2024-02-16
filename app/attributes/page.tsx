"use client";
import AddNewAttribute from "@/components/add_new_attribute/add_new_attribute";
import AttributeTable from "@/components/attributes/attribute_table";
import SearchAttribute from "@/components/attributes/search_attribute";
import React, { useState } from "react";

const Attributes = () => {
  const [showAddAttribute, setShowAssAttribute] = useState<Boolean>(false);

  const handleOpenAddAttribute = () => {
    setShowAssAttribute(!showAddAttribute);
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Attributes</h1>
        <div>
          <button
            onClick={handleOpenAddAttribute}
            className="bg-blue-500 w-[203px] h-[40px] text-[16px] rounded-full font-semibold text-white">
            Add New Attributes
          </button>
        </div>
      </div>
      <div className="w-full bg-white rounded-md shadow-md p-5 my-10">
        <SearchAttribute />
        <AttributeTable />
      </div>
      <div className="absolute -top-10 flex justify-center items-center left-20 ">
        {showAddAttribute ? (
          <div className="w-[1000px] h-[500px] rounded-md shadow-xl backdrop-blur-md p-10  mt-10">
            <AddNewAttribute handleOpenAddAttribute={handleOpenAddAttribute} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Attributes;
