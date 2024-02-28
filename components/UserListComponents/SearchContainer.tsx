import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { enableAddBannerComponentShow } from "@/redux/AddBannerComponentShow";
import { enableAddUserComponentShow } from "@/redux/AddUserComponentShow";

const SearchContainer = () => {
  const [searchBanners, setSearchBanners] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="w-full flex gap-[30px] flex-col 1000px:flex-row">
      <div className="w-full 700px:w-[600px] h-[40px] rounded-full drop-shadow-md bg-[#f4f5f9] border border-[#81b4f8] px-[16px] flex items-center gap-[16px]">
        <div className="text-gray-400 cursor-pointer">
          <SearchIcon />
        </div>

        <input
          type="text"
          placeholder="Search banners"
          className="w-full outline-none border-none bg-transparent"
          onChange={(e) => {
            setSearchBanners(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center gap-[30px]">
        <button
          name="Search banners"
          className={`${
            searchBanners.length === 0
              ? "cursor-not-allowed bg-[#71A7EF]"
              : "cursor-pointer bg-[#196fe1]"
          } text-white px-[16px] h-[40px] rounded-full text-[14px] font-bold`}
        >
          Search user
        </button>

        <button
          name="Search banners"
          className={`bg-[#196fe1] text-white px-[16px] h-[40px] rounded-full text-[14px] font-bold`}
          onClick={() => {
            dispatch(enableAddUserComponentShow());
          }}
        >
          Add user
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
