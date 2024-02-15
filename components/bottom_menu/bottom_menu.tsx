import React from "react";
import Home from "@/asserts/home.webp";
import Orders from "@/asserts/Orders.webp";
import Product from "@/asserts/Products.webp";
import Add from "@/asserts/Add_product.webp";
import Transaction from "@/asserts/Transactions.webp";
import Review from "@/asserts/Reviews.webp";
import Settings from "@/asserts/Settings.webp";
import Image from "next/image";
import Link from "next/link";

const Icons = [
  {
    id: 1,
    icons: Home,
    iconName: "Home",
    path: "/",
  },
  {
    id: 2,
    icons: Orders,
    iconName: "Orders",
    path: "/",
  },
  {
    id: 4,
    icons: Add,
    iconName: "Add",
    path: "/",
  },
  {
    id: 3,
    icons: Product,
    iconName: "Product",
    path: "/",
  },

  {
    id: 5,
    icons: Transaction,
    iconName: "History",
    path: "/",
  },
];

const BottomMenu = () => {
  return (
    <nav className="bg-[#81B4F8] h-20 shadow-xl grid grid-cols-5 gap-5 px-5">
      {Icons?.map((item, index) => (
        <Link
          href={item?.path}
          key={index}
          className="flex flex-col juc justify-center items-center">
          <Image
            src={item?.icons}
            alt="icon"
            width={40}
            height={40}
            className="w-7 h-7"
          />
          <span className="font-medium text-white tracking-[1px]">
            {item.iconName}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomMenu;
