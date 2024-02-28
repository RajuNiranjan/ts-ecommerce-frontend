import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { disableAddCouponComponentShow } from "@/redux/AddCouponComponentShow";

const AddCouponComponent = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >("");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const image = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(image);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "image/*",
    multiple: false,
  });
  const dispatch = useDispatch()
  return (
    <div className="bg-white px-[32px] py-[32px] rounded-[16px] flex flex-col gap-[16px] text-black h-[90vh] overflow-auto relative"
    style={{scrollbarWidth: 'none'}}>
        <div
        className="absolute top-[20px] right-[20px] cursor-pointer"
        onClick={()=>{ dispatch(disableAddCouponComponentShow()) }}>
            <CloseIcon />
        </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <p className="text-[16px]">Coupon Name</p>
          <div className="w-full 900px:w-1/2 bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="Republic sale coupon"
              className="bg-transparent outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px] flex-col 900px:flex-row">
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Discount type</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px] text-gray-400">
            <select className="bg-transparent outline-none border-none w-full">
              <option value="" className="w-full">
                Type one
              </option>
              <option value="" className="w-full">
                Type two
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Coupon Amount</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] w-[340px] 700px:w-[500px] 900px:w-[760px]">
        <p className="text-[16px]">Description</p>
        <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
          <textarea
            placeholder="500"
            className="bg-transparent outline-none border-none w-[740px] h-[76px] resize-none"
          />
        </div>
      </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px] flex-col 900px:flex-row">
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Starting Date</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Expiry Date</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <div
        {...getRootProps()}
        className="dropzone text-center border-dashed p-6 rounded-md bg-[#d1e2fa] w-[340px] 700px:w-[500px] 900px:w-[760px]"
      >
        <input {...getInputProps()} />
        {selectedImage ? (
          <Image
            src={typeof selectedImage === "string" ? selectedImage : ""}
            alt="Person icon"
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover rounded mx-auto cursor-pointer"
          />
        ) : (
          <p className="text-gray-600">
            Drag and drop an image here, or click to select one
          </p>
        )}
      </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <p className="text-[16px]">Coupon Code</p>
          <div className="w-full 900px:w-1/2 bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="Republic sale coupon"
              className="bg-transparent outline-none border-none w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[20px] text-white text-[16px]">
        <button
          name="cancel button"
          className="px-[24px] py-[10px] rounded-full bg-[#b3b3b3]"
        >
          Cancel
        </button>
        <button
          name="add new coupons"
          className="px-[24px] py-[10px] rounded-full bg-[#196fe1]"
        >
          Add new coupons
        </button>
      </div>
    </div>
  );
};

export default AddCouponComponent;
