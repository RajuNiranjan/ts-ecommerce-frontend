import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const pathName = usePathname();

  return (
    <nav className="flex justify-between items-center px-14 h-20 text-white sticky top-0 z-50">
      <div>
        <Link href="/" className="text-2xl font-bold ">
          Trend_set
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/wishlist"
          className={`${pathName === "/wishlist" && "transition-all dur500"}`}
        >
          {pathName === "/wishlist" ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Link>
        <Link
          href="/cart"
          className={`${pathName === "/cart" && " transition-all dur500"}`}
        >
          {pathName === "/cart" ? (
            <ShoppingBagIcon />
          ) : (
            <ShoppingBagOutlinedIcon />
          )}
        </Link>
        <div>
          {currentUser ? (
            <Link
              href="/profile"
              className={`border rounded-md p-2 ${
                pathName === "/profile" &&
                "bg-white  text-black  transition-all dur500"
              }`}
            >
              {pathName === "/profile" ? <PersonIcon /> : <PersonOutlineIcon />}{" "}
              <small>{currentUser.email}</small>
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
