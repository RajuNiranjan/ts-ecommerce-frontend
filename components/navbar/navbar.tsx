import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import Image from "next/image";
import Personicon from "@/components/assets/oldman.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  disableEditProfileComponentShow,
  enableEditProfileComponentShow,
} from "@/redux/EditProfileComponentShow";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import {
  enableExpandedSidebarShow,
  disableExpandedSidebarShow,
} from "@/redux/ExpandedSidebarShow";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { editProfileCompanentShowState } = useSelector(
    (state: RootState) => state.EditProfileComponentShow
  );
  const dispatch = useDispatch();

  const router = useRouter();
  // const User = sessionStorage.getItem("User");
  // if (!User) {
  //   router.push("/login");
  // }

  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );

  return (
    <div className="w-full px-[20px] py-[10px] bg-white flex items-center justify-between drop-shadow h-[70px] fixed top-0 left-0 z-10">
      <p className="hidden 700px:block text-[40px] leading-[49px] cursor-pointer">
        Logs
      </p>
      <div
        className="flex 700px:hidden h-[40px] w-[40px] rounded-full bg-[#81b4f8] items-center justify-center text-white cursor-pointer"
        onClick={() => {
          expandedSidebarShow
            ? dispatch(disableExpandedSidebarShow())
            : dispatch(enableExpandedSidebarShow());
        }}>
        {expandedSidebarShow ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className="w-[50vw] 1000px:w-[588px] h-[48px] bg-[#F4F5F9] rounded-full box-border overflow-hidden flex items-center justify-between gap-[10px] px-[24px] py-[10px]">
        <input
          type="text"
          className="w-full h-full outline-none border-none bg-transparent"
          placeholder="Search items, Products"
        />

        <div className="text-gray-400 cursor-pointer">
          <SearchIcon />
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <div className="text-gray-400 relative cursor-pointer">
          <p className="w-[16px] h-[16px] text-[10px] bg-[#ff3b30] text-white flex items-center justify-center rounded-full absolute right-[-6px] top-[-6px]">
            7
          </p>
          <NotificationsIcon />
        </div>

        <div className="text-gray-400 cursor-pointer">
          <LightModeIcon />
        </div>

        <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[#196FE1] border-opacity-20 cursor-pointer relative">
          <Image
            src={Personicon}
            alt="Person icon"
            width={38}
            height={38}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="w-[14px] h-[14px] bg-white rounded-full flex items-center justify-center absolute bottom-[-2px] right-[-2px]">
            <div className="bg-[#30d158] w-[10px] h-[10px] rounded-full" />
          </div>
        </div>

        <div
          className="hidden 1000px:flex items-center gap-[10px] cursor-pointer"
          onClick={() => {
            dispatch(
              editProfileCompanentShowState
                ? disableEditProfileComponentShow()
                : enableEditProfileComponentShow()
            );
          }}>
          <p className="text-[14px] font-[500]">Admin</p>
          <div
            className={`${
              editProfileCompanentShowState ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
