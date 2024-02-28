import TrasactionDetails from "@/components/transactions_details/transaction_details";
import React from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";

const TransactionsDetails = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] xl:pb-[20px]">
        <TrasactionDetails />
      </div>
    </div>
  );
};

export default TransactionsDetails;
