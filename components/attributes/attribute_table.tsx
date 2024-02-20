import PaginationRounded from "@/ui/pagination";
import Select from "@/ui/select";
import Tables from "@/components/attributes/table";
import React from "react";

interface Select {
  name: string;
}

const bottom: Select[] = [
  {
    name: "sheer:01",
  },
];

interface Attribute {
  name: string;
  description: string;
  value: string[];
  action: JSX.Element;
}

const body: Attribute[] = [
  {
    name: "Size",
    description: "Different size for clothes",
    value: ["S", "M", "XL", "XXL"],
    action: <p className="font-bold bg-blue-500 text-semibold">View Details</p>,
  },
  {
    name: "Color",
    description: "childer, Watches",
    value: ["Red", "Blue", "Green", "Black", "Yellow"],
    action: <p className="font-bold bg-blue-500 text-semibold">View Details</p>,
  },
];

const AttributeTable = () => {
  return (
    <div>
      <Tables body={body} />
      <div className="flex flex-col gap-5 sm:flex-row justify-between px-5 py-10">
        {bottom?.map((item, index) => (
          <Select key={index} name={item?.name} />
        ))}
        <PaginationRounded />
      </div>
    </div>
  );
};

export default AttributeTable;
