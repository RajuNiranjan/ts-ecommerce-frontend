import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { disableAddBannerComponentShow } from "@/redux/AddBannerComponentShow";
import { RootState } from "@/redux/store";

const AddBanner = () => {

    const dispatch = useDispatch()
    const { isDarkModeEnableState } = useSelector(
      (state: RootState) => state.IsDarkModeEnable
    );

  return (
    <div
      className={`rounded-[16px] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white text-black'} px-[20px] py-[20px] drop-shadow-md flex flex-col gap-[32px] relative`}
    >
        <div
        className="absolute top-[12px] right-[12px] cursor-pointer"
        onClick={()=>{ dispatch(disableAddBannerComponentShow()) }}>
            <CloseIcon />
        </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[32px] flex-col 900px:flex-row">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Title</p>

            <input
              type="text"
              className="outline-none border-none p-[10px] w-[320px] h-[40px] rounded bg-[#d1e2fa]"
              placeholder="Enter title"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Date</p>

            <input
              type="text"
              className="outline-none border-none p-[10px] w-[320px] h-[40px] rounded bg-[#d1e2fa]"
              placeholder="eg. 13-02-2023"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Description</p>

          <textarea
            name=""
            id=""
            className="outline-none border-none w-[320px] 900px:w-[766px] h-[96px] bg-[#d1e2fa] rounded p-[10px] resize-none"
            placeholder="Enter the description of the banner"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Hyperlink</p>

          <input
            name=""
            id=""
            className="outline-none border-none w-[320px] 900px:w-[526px] h-[40px] bg-[#d1e2fa] rounded p-[10px]"
            placeholder="Enter the link of the image"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Select image</p>

          <div>
            <label
              htmlFor="file_input"
              className="px-[16px] py-[8px] text-[14px] text-white bg-[#b3b3b3] rounded w-fit"
            >
              Select media
            </label>
            
            <input
              type="file"
              id="file_input"
              name="file_input"
              className="hidden"
              accept=".jpg,.png,.jpeg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[24px]">
        <button
          name="Save draft button"
          className="py-[10px] px-[24px] text-white rounded-full text-[16px] bg-[#b3b3b3]"
        >
          Save Draft
        </button>
        <button
          name="Add banner button"
          className="py-[10px] px-[24px] text-white rounded-full text-[16px] bg-[#196fe1]"
        >
          Add Banner
        </button>
      </div>
    </div>
  );
};

export default AddBanner;
