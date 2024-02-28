import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { disableAddCategoryListShow } from "@/redux/AddCategoryListShow";
import Image from "next/image";
import ThumbnailIcon from "./icons/thumbnailIcon.png";

const AddCategoryList = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#ebeef0] rounded-[24px] px-[20px] py-[20px] relative">
      <div
        className="absolute right-[10px] top-[10px] text-black cursor-pointer"
        onClick={() => {
          dispatch(disableAddCategoryListShow());
        }}
      >
        <CloseIcon />
      </div>

      <p className="text-[24px] font-[600] text-black">Add New Category</p>

      <div className="w-[340px] 500px:w-[460px] 900px:w-[790px] flex flex-col gap-[48px] mt-[30px]">
        <div className="flex flex-col gap-[16px] text-black">
          <div className="w-full flex gap-[20px] 900px:gap-[100px] flex-col 900px:flex-row">
            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Category name</p>

              <input
                type="text"
                placeholder="Category name"
                className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] border-opacity-80"
              />

              <p className="text-[12px]">
                The name is how it appears on website
              </p>
            </div>

            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Parent Category</p>

              <input
                placeholder="Enter parent category"
                className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] border-opacity-80"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Description</p>

            <textarea
              placeholder="Enter the decription of the category"
              className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] border-opacity-80 resize-none h-[80px]"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Thumbnail</p>

            <div className="flex items-center gap-[8px]">
              <Image
                src={ThumbnailIcon}
                alt="Thumbnail icon"
                width={48}
                height={48}
                className="w-[48px] h-[48px] object-cover cursor-pointer"
              />

              <div className="p-[10px]">
                <label
                  htmlFor="category_thumbnail_input"
                  className="px-[24px] py-[10px] border border-[#196fe1] rounded-[8px] text-[16px] font-[500] text-[#196fe1] cursor-pointer"
                >
                  Upload/Add Image
                </label>
                <input
                  type="file"
                  id="category_thumbnail_input"
                  name="category_thumbnail_input"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[16px] text-[16px] font-[600] flex-wrap">
          <button
            name="Save Draft button"
            className="bg-[#b3b3b3] px-[24px] py-[10px] rounded-[10px]"
          >
            Save Draft
          </button>

          <button
            name="Add new Category button"
            className="px-[24px] py-[10px] rounded-[10px] bg-[#196fe1]"
          >
            Add New Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryList;
