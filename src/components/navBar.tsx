import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <nav className="flex justify-between items-center p-4 h-20 sticky top-0 bg-white z-50">
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <div>
            <Menu
              onClick={handleShowMenu}
              className="transition-all duration-500 cursor-pointer"
            />
          </div>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={menuRef}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-[250px] absolute top-0 left-0 h-screen bg-white shadow-xl"
              >
                <div className="flex flex-col p-4">
                  <Link href="/" className="mb-4" onClick={handleShowMenu}>
                    SHIRTS
                  </Link>
                  <Link href="/" className="mb-4" onClick={handleShowMenu}>
                    PANTS
                  </Link>
                  <Link href="/" className="mb-4" onClick={handleShowMenu}>
                    T-SHIRTS
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/" className="font-bold text-xl tracking-wide">
          TREND SET
        </Link>
      </div>

      <div className="hidden md:flex gap-4 items-center">
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
