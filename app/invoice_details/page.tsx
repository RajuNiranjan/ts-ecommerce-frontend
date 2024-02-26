
import AddressDetails from "@/ui/address_details";
import { FaPrint } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import React from "react";

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

const InvoiceDetails = () => {
  return (
    <div>
      <div>
        <h1 className="text-[36px] font-semibold">Transaction Details</h1>
        <div>
          <div className="bg-white rounded-md shadow-md border my-10 border-blue-300 w-full flex flex-col gap-5  p-5">
            <div className="flex justify-between items-center  w-full">
              <h1 className="text-[24px] font-semibold">Order#0231</h1>
              <button className="w-max font-semibold text-[24px] text-white px-2 bg-[#196FE1] rounded-md">
                Completed
              </button>
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
              {addressData?.map((item, index) => (
                <AddressDetails key={index} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[18px]">Email</h1>
                  <p className="text-[16px] font-normal text-[#196FE1]">
                    sample@gamil.com
                  </p>
                </div>
                <div className="w-[150px]">
                  <h1 className="font-semibold text-[18px]">Shipping Method</h1>
                  <p className="text-[16px] font-normal">Flat Rate</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-[18px]">Phone</h1>
                  <p className="text-[16px] font-normal text-[#196FE1]">
                    123=-456-7890
                  </p>
                </div>
                <div className="w-[150px]">
                  <h1 className="font-semibold text-[18px]">Payment Via</h1>
                  <p className="text-[16px] font-normal">Cash On Delivery</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button className="flex items-center h-10 justify-center gap-1 w-max px-3 rounded-md bg-[#196FE1] text-white">
                <FaPrint />
                <span className="font-semibold text-[16px]">Print</span>
              </button>
              <button className="flex items-center h-10 justify-center gap-1 w-max px-3 rounded-md bg-[#196FE1] text-white">
                <MdOutlineFileDownload />
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

export default InvoiceDetails;
