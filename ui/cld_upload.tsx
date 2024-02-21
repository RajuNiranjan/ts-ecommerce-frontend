import { CldUploadButton } from "next-cloudinary";
import React from "react";

const CldUpload = () => {
  return (
    <div>
      <CldUploadButton uploadPreset="<Upload Preset>" />
    </div>
  );
};

export default CldUpload;
