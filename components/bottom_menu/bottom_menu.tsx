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
    id: 3,
    icons: Product,
    iconName: "Product",
    path: "/",
  },
  {
    id: 4,
    icons: Add,
    iconName: "Add",
    path: "/",
  },
  {
    id: 5,
    icons: Transaction,
    iconName: "Transaction",
    path: "/",
  },
  {
    id: 6,
    icons: Review,
    iconName: "Review",
    path: "/",
  },
  {
    id: 7,
    icons: Settings,
    iconName: "Settings",
    path: "/",
  },
];

const BottomMenu = () => {
  return (
    <nav className="bg-[#81B4F8] h-10 shadow-xl  flex items-center justify-between px-5">
      {Icons?.map((item, index) => (
        <Link href={item?.path} key={index}>
          <Image
            src={item?.icons}
            alt="icon"
            width={40}
            height={40}
            className="w-6 h-6"
          />
        </Link>
      ))}
    </nav>
  );
};

export default BottomMenu;
