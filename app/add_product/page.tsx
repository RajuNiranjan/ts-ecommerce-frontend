import ImageUpload from "@/components/add_product/image_upload";
import ProducDetails from "@/components/add_product/product_details";
import React from "react";

const AddProduct = () => {
  return (
    <div className="mb-20 sm:mb-0">
      <h1 className="text-4xl font-semibold">Add Product</h1>
      <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-5 md:gap-5 2xl:gap-5 mt-10">
        <div className="col-span-6 sm:col-span-7">
          <ProducDetails />
        </div>
        <div className="col-span-6 lg:col-span-5 2xl:col-span-4">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
