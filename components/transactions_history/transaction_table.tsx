import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";

interface Transactions {
  transactionId: number;
  receverName: string;
  receverId: number;
  date: string;
  action: JSX.Element;
  path: string;
}

interface TablesProps {
  body: Transactions[];
}

const TransactionTable: React.FC<TablesProps> = ({ body }) => {
  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        className="md:w-[600px] lg:w-[800px] xl:[1200px] 2xl:w-full">
        <TableHead>
          <TableRow sx={{ padding: 0 }}>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]   lg:text-[14px] xl:text-[14px]">
              Transaction ID
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              Receiver Name
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              Reaceiver ID
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              Date
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
                {item?.transactionId}
              </TableCell>
              <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px]">
                {item?.receverName}
              </TableCell>
              <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px]">
                {item?.receverId}
              </TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell className="md:text-[12px] text-[10px] sm:text-[12px]  lg:text-[14px]">
                <Link href={item?.path}>{item?.action}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
