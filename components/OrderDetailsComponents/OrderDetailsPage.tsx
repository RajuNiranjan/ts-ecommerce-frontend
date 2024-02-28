import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import React from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import OrderDetailsContainer from "@/components/OrderDetailsComponents/OrderDetailsContainer";

const OrderDetailsPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />

      <div className="w-full pt-[100px] pl-[90px] pr-[20px] pb-[20px]">
        <OrderDetailsContainer />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
