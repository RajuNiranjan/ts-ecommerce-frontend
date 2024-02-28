import PaginationRounded from "@/ui/pagination";
import SelectComponent from "@/ui/selectComponent";
import React from "react";

interface TableHeadDataProps {
  headers: string[];
}
interface SizeOption {
  value: string;
}

interface TableBodyDataProps {
  data: {
    name: string;
    description: string;
    value: SizeOption[];
    action: JSX.Element;
  }[];
}

const AttributeTable: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
  headers,
  data,
}) => {
  return (
    <div>
      <div
        className="w-full  flex flex-col gap-[48px] overflow-auto"
        style={{ scrollbarWidth: "none" }}>
        <div className="w-full flex items-center justify-between text-[16px] font-[500] gap-[10px]">
          {headers?.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
              <h1 className="font-bold">{item}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px]">
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-[14px] gap-[10px]">
                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.name}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.description}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-cente">
                  <ul className="flex gap-2">
                    {item?.value?.map((item, index) => (
                      <li
                        key={index}
                        className="list-none flex justify-center items-center col-span-1 bg-gray-300  px-3 h-max rounded-sm text-white w-max">
                        {item?.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  {item?.action}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full my-5 flex items-center justify-between gap-40">
          <div>
            <SelectComponent />
          </div>
          <div>
            <PaginationRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributeTable;
