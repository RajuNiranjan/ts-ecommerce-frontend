import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TableComponent = () => {
  const products = [
    {
      id: 1,
      name: "Navy Bluc Smart LiVatch",
      size: "XL",
      color: "Blue",
      price: 2000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Navy Bluc Smart LiVatch",
      size: "XL",
      color: "Blue",
      price: 2000,
      quantity: 2,
    },
    {
      id: 3,
      name: "Navy Bluc Smart LiVatch",
      size: "XL",
      color: "Blue",
      price: 2000,
      quantity: 2,
    },
  ];

  const paymentDetails = {
    paymentMethod: "Mastercard",
    cardHolder: "David Nichols",
    cardNumber: "XXXX-XXXX-XXXX-1234",
    totalAmount: 85969,
  };

  return (
    <TableContainer className="max-h-screen">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              className="font-semibold text-[16px]"
              sx={{ width: "5px" }}>
              #
            </TableCell>
            <TableCell
              className="font-semibold text-[16px]"
              sx={{ width: "800px" }}>
              Product
            </TableCell>
            <TableCell
              className="font-semibold text-[16px]"
              sx={{ width: "200px" }}>
              Quantity
            </TableCell>
            <TableCell
              className="font-semibold text-[16px]"
              sx={{ width: "200px" }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell
                className="font-semibold text-[14px]"
                sx={{ width: "5px" }}>
                {product.id}
              </TableCell>
              <TableCell sx={{ width: "800px" }}>
                <div>
                  <div>
                    <h1 className="font-semibold text-[16px]">
                      {product.name}
                    </h1>
                  </div>
                  <div className="flex gap-5 items-center font-normal text-[14px] text-[#333]">
                    <div className="flex items-center">
                      <p>size:</p>
                      <p>{product.size}</p>
                    </div>
                    <div className="flex items-center">
                      <p>color:</p>
                      <p>{product.color}</p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{ width: "200px" }}
                className="font-normal text-[14px]">
                {product.quantity}
              </TableCell>

              <TableCell
                sx={{ width: "200px" }}
                className="font-normal text-[14px] text-[#196FE1]">
                ₹ {product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
