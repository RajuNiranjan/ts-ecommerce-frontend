"use client";
import AddNewAttribute from "@/components/add_new_attribute/add_new_attribute";
import AttributeTable from "@/components/attributes/attribute_table";
import SearchAttribute from "@/components/attributes/search_attribute";
import React, { useState } from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import dynamic from "next/dynamic";
import AttributesPage from "@/components/attributes/AttributesPage";

const Attributes = () => {
  const [showAddAttribute, setShowAssAttribute] = useState<Boolean>(false);

  const handleOpenAddAttribute = () => {
    setShowAssAttribute(!showAddAttribute);
  };

  const AttributesPage = dynamic(
    () => import("@/components/attributes/AttributesPage"),
    {
      ssr: false,
      loading: () => (
        <div className="w-full">
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
          </div>
        </div>
      ),
    }
  );

  return <AttributesPage />;
};

export default Attributes;

// @/components/OrderDetailsComponents/OrderDetailsPage
