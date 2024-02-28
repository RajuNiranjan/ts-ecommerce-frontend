import Productsearch from "@/components/product_list/product_search";
import ProductTable from "@/components/product_list/product_table";
import EditProfileComponent from '@/components/Navbar/EditProfileComponent'
import Navbar from '@/components/Navbar/Navbar'
import ExpandedSidebar from '@/components/Sidebar/ExpandedSidebar'
import Sidebar from '@/components/Sidebar/Sidebar'

import React from "react";

const ProductListPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] pl-[90px] pr-[20px] pb-[20px]">
    <div className="mb-20 sm:mb-0">
      <h1 className="text-[36px] font-semibold">Product List</h1>
      <Productsearch />
      <ProductTable />
    </div>
    </div>
    </div>
  );
};

export default ProductListPage;
