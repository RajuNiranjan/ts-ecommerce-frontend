import Link from "next/link";
import React from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 h-20  sticky top-0">
      <div>
        <Link href="/" className="font-bold text-xl tracking-wide ">
          TREND SET
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/">SHIRTS</Link>
        <Link href="/">PANTS</Link>
        <Link href="/">T-SHIRTS</Link>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/login">
          <ShimmerButton className="shadow-2xl">
            <span className="text-center text-sm leading-none tracking-wider text-white font-bold dark:from-white dark:to-slate-900/10 lg:text-lg">
              Login
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
