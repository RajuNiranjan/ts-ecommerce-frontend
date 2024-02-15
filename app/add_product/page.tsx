import ImageUpload from "@/components/add_product/image_upload";
import ProducDetails from "@/components/add_product/product_details";
import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Add Product</h1>
      <div className="grid xl:grid-cols-12 gap-5 mt-10">
        <div className="col-span-7">
          <ProducDetails />
        </div>
        <div className="col-span-4">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
