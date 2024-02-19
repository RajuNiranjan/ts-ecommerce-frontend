"use client";
import AddNewAttribute from "@/components/add_new_attribute/add_new_attribute";
import SearchAttribute from "@/components/attributes/search_attribute";
import TransactionTable from "@/components/transactions_history/transaction_table";
import React, { useState } from "react";

const Attributes = () => {
  const [showAddAttribute, setShowAssAttribute] = useState<Boolean>(false);

  const handleOpenAddAttribute = () => {
    setShowAssAttribute(!showAddAttribute);
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Transaction History</h1>
      </div>
      <div className="w-full bg-white rounded-md shadow-md p-5 my-10">
        <SearchAttribute />
        <TransactionTable />
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
