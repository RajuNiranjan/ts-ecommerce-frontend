import ProductCard from "@/components/productCard";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
