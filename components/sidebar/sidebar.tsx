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
    path: "/attributes",
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
    path: "/transactions_history",
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
      <nav
        className={`hidden fixed h-screen w-[64px] bg-[#81B4F8]  sm:flex flex-col items-center py-8 gap-20 sm:relative z-10  `}>
        <div
          className="bg-white rounded-full p-2 w-10 h-10 "
          onClick={() => {
            handleToggleSideMenu();
          }}>
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
              onClick={handleToggleSideMenu}
              key={index}
              src={icon}
              alt="lock open"
              width={50}
              height={50}
              className="w-6 h-6 cursor-pointer"
            />
          ))}
        </div>

        {showSideMenu ? (
          <div
            className={`absolute  w-[150px] bg-[#81B4F8] h-full flex flex-col items-center py-8 gap-20 top-0 left-0`}>
            <div
              className="bg-white rounded-full p-2 w-10 h-10"
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
                  className="flex gap-2 justify-start text-white items-center px-3">
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
