import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddressDetails from "@/ui/address_details";
import { FaPrint } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import React from "react";
import InvoiceTable from "@/components/invoice_details/invoice_details_table";

const addressData = [
  {
    addressType: "Billing Address Details",
    clinetName: "Rechi Wilson",
    landmark: "Gelaxy Towers",
    address: "Raidurg, Raidurg Police Station, Hyderabad, Telangana",
  },
  {
    addressType: "Shipping Address Details",
    clinetName: "Rechi Wilson",
    landmark: "Gelaxy Towers",
    address: "Raidurg, Raidurg Police Station, Hyderabad, Telangana",
  },
];

const TableHeadData = [
  {
    name: "#",
    minWidth: 100,
    maxWidth: 120,
  },
  {
    name: "Product",
    minWidth: 180,
    maxWidth: 200,
  },
  {
    name: "Quantity",
    minWidth: 100,
    maxWidth: 120,
  },
  {
    name: "Total",
    minWidth: 100,
    maxWidth: 120,
  },
];

const TableBodyData = [
  {
    id: 1,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
  {
    id: 2,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
  {
    id: 3,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
];

const InvoicePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] xl:pb-[20px]">
        <h1 className="text-[36px] font-semibold">Transaction Details</h1>
        <div>
          <div className="bg-white rounded-md shadow-md border my-10 border-blue-300 w-full flex flex-col gap-5  p-5">
            <div className="flex justify-between flex-col xl:flex-row  gap-3 xl:items-center  w-full">
              <h1 className="text-[24px] font-semibold">Order#0231</h1>
              <button className="w-max font-semibold text-[24px] text-white px-2 bg-[#196FE1] rounded-md">
                Completed
              </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4">
              {addressData?.map((item, index) => (
                <AddressDetails key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-row xl:flex-col xl:gap-4">
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 xl:items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm xl:text-[18px]">
                    Email
                  </h1>
                  <p className="xl:text-[16px] text-sm font-normal text-[#196FE1]">
                    sample@gamil.com
                  </p>
                </div>
                <div className="w-[150px]">
                  <h1 className="font-semibold text-sm xl:text-[18px]">
                    Shipping Method
                  </h1>
                  <p className="xl:text-[16px] text-sm font-normal">
                    Flat Rate
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm xl:text-[18px]">
                    Phone
                  </h1>
                  <p className="xl:text-[16px] text-sm font-normal text-[#196FE1]">
                    123-456-7890
                  </p>
                </div>
                <div className="w-[150px]">
                  <h1 className="font-semibold text-sm xl:text-[18px]">
                    Payment Via
                  </h1>
                  <p className="xl:text-[16px] text-sm font-normal">
                    Cash On Delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-md shadow-md p-5 my-5 overflow-x-auto">
              <InvoiceTable headers={TableHeadData} data={TableBodyData} />
            </div>
            <div className="flex flex-col xl:flex-row w-full xl:justify-end gap-3">
              <button className="flex items-center h-10 justify-center gap-1 xl:w-max px-3 rounded-md bg-[#196FE1] text-white">
                <FaPrint className="text-xl" />
                <span className="font-semibold text-[16px]">Print</span>
              </button>
              <button className="flex items-center h-10 justify-center gap-1 xl:w-max px-3 rounded-md bg-[#196FE1] text-white">
                <MdOutlineFileDownload className="text-xl" />
                <span className="font-semibold text-[16px]">
                  Download Invoice
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
