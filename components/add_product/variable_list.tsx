import React, { useState } from "react";
import VariableListDropDown from "./variable_list_drop_down";

const VariableList = () => {
  return (
    <div>
      <div className="bg-white shadow-md border p-5 rounded-md  w-full my-10">
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
