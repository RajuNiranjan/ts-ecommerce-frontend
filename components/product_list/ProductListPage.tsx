import Productsearch from "@/components/product_list/product_search";
import ProductTable from "@/components/product_list/product_table";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";

import React from "react";

const TableHeadData = [
  {
    name: "ProductName",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Category",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Price",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Stock",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Sold",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Revenues",
    minWidth: 100,
    maxWidth: 100,
  },
];

const TableBodyData = [
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    sold: 126,
    revenue: 100000,
  },
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    sold: 126,
    revenue: 100000,
  },
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    sold: 126,
    revenue: 100000,
  },
];

const ProductListPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full pt-[100px] p-5 xl:pl-[90px] xl:pr-[20px] pb-[20px]">
        <div className="mb-20 sm:mb-0 ">
          <h1 className="text-[36px] font-semibold">Product List</h1>
          <Productsearch />
          <div className="bg-white p-5 border border-blue-300 rounded-md shadow-sm">
            <ProductTable headers={TableHeadData} data={TableBodyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
