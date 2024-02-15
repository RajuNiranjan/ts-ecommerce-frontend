import Productsearch from "@/components/product_list/product_search";
import ProductTable from "@/components/product_list/product_table";

import React from "react";

const ProductList = () => {
  return (
    <div className="mb-20 sm:mb-0">
      <h1 className="text-[36px] font-semibold">Product List</h1>
      <Productsearch />
      <ProductTable />
    </div>
  );
};

export default ProductList;
