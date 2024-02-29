"use client";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddNewTax from "@/components/tax/add_new_tax";
import TaxTable from "@/components/tax/tax_table";
import PaginationRounded from "@/ui/pagination";
import SelectComponent from "@/ui/selectComponent";
import React, { useState } from "react";

const TableHeadData = [
  "Name",
  "Description",
  "Note",
  "Tax Rate",
  "Count Of Items",
];

const TableBodyData = [
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
];

const TaxPage = () => {
  const [showAddTaxComponent, setShowAddNewTaxes] = useState(false);

  const handleAddNewTax = () => {
    setShowAddNewTaxes(!showAddTaxComponent);
    console.log("closed");
  };

  return (
    <div className="w-full min-h-screen bg-[#ebeef0] relative">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] xl:pb-[20px]">
        <div className="mb-20 sm:mb-0 ">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[36px]">Taxes</h1>
            <button
              onClick={handleAddNewTax}
              className="text-[16px] font-semibold bg-[#196FE1] text-white flex justify-center items-center py-1 px-3 rounded-full">
              Add New Taxes
            </button>
          </div>
          <div className="bg-white rounded-md shadow-sm border mt-10 border-blue-300 p-3">
            <div>
              <TaxTable headers={TableHeadData} data={TableBodyData} />
              <div className="w-full flex items-center justify-between ">
                <div>
                  <SelectComponent />
                </div>
                <div>
                  <PaginationRounded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddTaxComponent && (
        <div className=" w-full h-full p-2 fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50  top-0 z-10 flex justify-center items-center">
          <div className="bg-white p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border ">
            <AddNewTax handleAddNewTax={handleAddNewTax} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxPage;
