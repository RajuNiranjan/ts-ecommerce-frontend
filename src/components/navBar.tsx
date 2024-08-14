import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { CircleUser, Heart, LogOut, Menu, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BecomeASeller from "./becomeASeller";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathName = usePathname();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);

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

  const handleLogOutAccount = () => {
    localStorage.clear();
    router.push("/");
  };

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
                  <Link
                    href="/products"
                    className="mb-4"
                    onClick={handleShowMenu}
                  >
                    SHIRTS
                  </Link>
                  <Link
                    href="/products"
                    className="mb-4"
                    onClick={handleShowMenu}
                  >
                    PANTS
                  </Link>
                  <Link
                    href="/products"
                    className="mb-4"
                    onClick={handleShowMenu}
                  >
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
        <Link href="/products">SHIRTS</Link>
        <Link href="/products">PANTS</Link>
        <Link href="/products">T-SHIRTS</Link>
      </div>

      <div className="flex justify-center items-center">
        {user ? (
          <div className="flex items-center gap-4">
            <Link
              href="/wishlist"
              className={`${
                pathName === "/wishlist" && "text-red-500"
              } hover:text-red-500`}
            >
              <Heart />
            </Link>
            <Link
              href="/viewcart"
              className={`${
                pathName === "/viewcart" && "text-red-500"
              } hover:text-red-500`}
            >
              <ShoppingBag />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <CircleUser className="cursor-pointer hover:text-red-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer hover:bg-red-500 p-2 rounded-lg hover:text-white">
                        Become a Seller
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Become A Seller</DialogTitle>
                        <DialogDescription>
                          <BecomeASeller />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogOutAccount}
                  className="flex items-center gap-2 cursor-pointer hover:bg-red-500 hover:text-white"
                >
                  Log Out
                  <LogOut size={16} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link href="/login">
            <ShimmerButton className="shadow-2xl">
              <span className="text-center text-sm leading-none tracking-wider text-white font-bold dark:from-white dark:to-slate-900/10 lg:text-lg">
                Login
              </span>
            </ShimmerButton>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
