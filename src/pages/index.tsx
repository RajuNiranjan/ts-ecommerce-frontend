import ProductCard from "@/components/productCard";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-wrap gap-2 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> <ProductCard />
      <ProductCard /> <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Home;
