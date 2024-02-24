import React from "react";
import Tables from "./table";
import PaginationRounded from "@/ui/pagination";
import Select from "@/ui/select";

interface Select {
  name: string;
}

const select: Select[] = [
  {
    name: "Category",
  },
  {
    name: "Status",
  },
  {
    name: "Price",
  },
  {
    name: "Months",
  },
];

const bottom: Select[] = [
  {
    name: "sheer:01",
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white  rounded-md shadow-md p-5 w-full sm:w-[580px] md:w-[600px] lg:w-[850px] xl:[1200px] 2xl:w-[1250px]">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
        {select?.map((item, index) => (
          <Select key={index} name={item?.name} />
        ))}
      </div>
      <Tables />
      <div className="flex flex-col gap-5 sm:flex-row justify-between px-5 py-10">
        <div>
          {bottom?.map((item, index) => (
            <Select key={index} name={item?.name} />
          ))}
        </div>
        <PaginationRounded />
      </div>
    </div>
  );
};

export default ProductTable;
