"use client";
import React, { useState } from "react";
import LockOpen from "@/asserts/lockOpen.png";
import Locked from "@/asserts/Locked.webp";
import Home from "@/asserts/home.webp";
import Orders from "@/asserts/Orders.webp";
import Product from "@/asserts/Products.webp";
import Add from "@/asserts/Add_product.webp";
import Transaction from "@/asserts/Transactions.webp";
import Review from "@/asserts/Reviews.webp";
import Settings from "@/asserts/Settings.webp";
import Image from "next/image";
import Link from "next/link";

const Icons = [Home, Orders, Product, Add, Transaction, Review, Settings];

const FullMenu = [
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
    path: "/product_list",
  },
  {
    id: 4,
    icons: Add,
    iconName: "Add",
    path: "/add_product",
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

const SideBar = () => {
  const [showSideMenu, setSideMenu] = useState(false);
  const handleToggleSideMenu = () => {
    setSideMenu(!showSideMenu);
  };
  return (
    <>
      <nav className="hidden sticky top-14 w-[64px] bg-[#81B4F8] h-screen sm:flex flex-col items-center py-8 gap-20 relative">
        <div
          className="bg-white rounded-full p-2 w-10 h-10 transition-all duration-500"
          onClick={handleToggleSideMenu}>
          <Image
            src={LockOpen}
            alt="lock open"
            width={50}
            height={50}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-8">
          {Icons?.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="lock open"
              width={50}
              height={50}
              className="w-6 h-6"
            />
          ))}
        </div>

        {showSideMenu ? (
          <div className="absolute  w-[220px] bg-[#81B4F8] h-screen flex flex-col items-center py-8 gap-20 top-0 translate-x-14 transition-all duration-1000">
            <div
              className="bg-white rounded-full p-2 w-10 h-10 transition-all duration-500"
              onClick={handleToggleSideMenu}>
              <Image
                src={Locked}
                alt="lock open"
                width={50}
                height={50}
                className="w-6 h-6 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-8">
              {FullMenu?.map((item, index) => (
                <Link
                  href={item?.path}
                  key={index}
                  className="flex gap-2 justify-start text-white items-center">
                  <Image
                    src={item?.icons}
                    alt="lock open"
                    width={50}
                    height={50}
                    className="w-6 h-6"
                  />
                  <h1 className="text-md">{item?.iconName}</h1>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default SideBar;
