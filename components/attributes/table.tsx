import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Attribute {
  name: string;
  description: string;
  value: string[];
  action: JSX.Element;
}

interface TablesProps {
  body: Attribute[];
}

const Tables: React.FC<TablesProps> = ({ body }) => {
  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        className="md:w-[600px] lg:w-[800px] xl:[1200px] 2xl:w-full">
        <TableHead>
          <TableRow sx={{ padding: 0 }}>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]   lg:text-[14px] xl:text-[14px]">
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
              <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px] flex flex-row gap-3 ">
                {item?.value?.map((item, index) => (
                  <li
                    className="list-none bg-gray-300  px-3 rounded-sm text-white w-max"
                    key={index}>
                    {item}
                  </li>
                ))}
              </TableCell>
              <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px]">
                {item?.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
