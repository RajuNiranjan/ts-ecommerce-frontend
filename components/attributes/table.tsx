import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PaginationRounded from "@/ui/pagination";
import Select from "@/ui/select";

interface Attribute {
  name: string;
  description: string;
  value: string[];
  action: JSX.Element;
}

interface TablesProps {
  body: Attribute[];
}

interface Select {
  name: string;
}

const bottom: Select[] = [
  {
    name: "sheer:01",
  },
];

const Tables: React.FC<TablesProps> = ({ body }) => {
  return (
    <>
      <TableContainer>
        <Table
          aria-label="simple table"
          className=" w-full md:w-[600px] lg:w-[800px] xl:[1200px] 2xl:w-full">
          <TableHead>
            <TableRow sx={{ padding: 0 }}>
              <TableCell className="font-semibold  text-[10px] sm:text-[12px]   lg:text-[14px] xl:text-[14px]">
                Name
              </TableCell>
              <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
                Description
              </TableCell>
              <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
                Value
              </TableCell>
              <TableCell className="font-semibold text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[14px]">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {body.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="md:text-[12px] text-[10px] sm:text-[12px] lg:text-[14px]">
                  {item?.name}
                </TableCell>
                <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px]">
                  {item?.description}
                </TableCell>
                <TableCell>
                  <ul
                    key={index}
                    className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px] flex items-center justify-center gap-3 ">
                    <li className="list-none  flex justify-center items-center col-span-1 bg-gray-300  px-3 rounded-sm text-white w-max">
                      S
                    </li>
                    <li className="list-none flex justify-center items-center col-span-1 bg-gray-300  px-3 rounded-sm text-white w-max">
                      XL
                    </li>
                  </ul>
                </TableCell>

                {/* <TableCell className="flex gap-4">
                {item?.value?.map((item, index) => (
                  <ul
                    key={index}
                    className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px] grid grid-cols-1">
                    <li className="list-none  col-span-1 bg-gray-300  px-3 rounded-sm text-white w-max">
                      {item}
                    </li>
                  </ul>
                ))}
              </TableCell> */}
                <TableCell className="md:text-[12px]   text-white text-[10px] sm:text-[12px]  lg:text-[14px]">
                  {item?.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex  justify-between gap-x-10 w-full  sm:flex-row px-5 py-10">
          <div>
            {bottom?.map((item, index) => (
              <Select key={index} name={item?.name} />
            ))}
          </div>
          <div className="w-[100px] h-5">
            <PaginationRounded />
          </div>
        </div>
      </TableContainer>
    </>
  );
};

export default Tables;
