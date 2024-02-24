import React, { useState } from "react";
import VariableListDropDown from "./variable_list_drop_down";

const VariableList = () => {
  return (
    <div>
      <div className="border my-10 w-[320px] sm:w-[550px] md:w-[600px] lg:w-[500px] xl:w-[650px]  2xl:w-[766px] bg-white p-5 rounded-md shadow-lg ">
        <h1 className="font-semibold text-[18px]">Variable List</h1>
        <div className="my-5 grid gap-3 grid-cols-1">
          <VariableListDropDown />
          <VariableListDropDown />
          <VariableListDropDown />
        </div>
      </div>
    </div>
  );
};

export default VariableList;
