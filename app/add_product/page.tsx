import ImageUpload from "@/components/add_product/image_upload";
import ProducDetails from "@/components/add_product/product_details";
import VariableList from "@/components/add_product/variable_list";

import React from "react";
import VarationDetails from "@/components/add_product/variation_details";

const AddProduct = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <div className="w-full pt-[100px] pl-[90px] pr-[20px] pb-[20px]">
        <div className="mb-20 sm:mb-0">
          <h1 className="text-4xl font-semibold">Add Product</h1>
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-5 md:gap-5 2xl:gap-5 mt-10">
            <div className="col-span-7">
              <ProducDetails />
            </div>
            <div className="col-span-5">
              <ImageUpload />
            </div>
          </div>
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-5 md:gap-5 2xl:gap-5 mt-10 ">
            <div className=" col-span-7 ">
              <VarationDetails />
            </div>
            <div className=" col-span-5">
              <VariableList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
