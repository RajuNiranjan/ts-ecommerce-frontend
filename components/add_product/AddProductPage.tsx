import ImageUpload from "@/components/add_product/image_upload";
import ProducDetails from "@/components/add_product/product_details";
import VariableList from "@/components/add_product/variable_list";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import VarationDetails from "@/components/add_product/variation_details";

const AddProduct = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] pb-[20px]">
        <div className="mb-20 sm:mb-0">
          <h1 className="text-4xl font-semibold">Add Product</h1>
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-5 md:gap-5 2xl:gap-5 mt-10">
            <div className="xl:col-span-7 w-full ">
              <ProducDetails />
            </div>
            <div className="xl:col-span-5">
              <ImageUpload />
            </div>
          </div>
          <div className="grid xl:grid-cols-12 my-5 gap-5 ">
            <div className=" xl:col-span-7 ">
              <VarationDetails />
            </div>
            <div className=" xl:col-span-5">
              <VariableList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
