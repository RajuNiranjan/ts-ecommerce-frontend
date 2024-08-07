import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: string;
  itemName: string;
  itemCost: number;
}

const ProductCard = () => {
  return (
    <div>
      <div className="w-[220px] h-[300px] border rounded-lg overflow-hidden relative">
        <Image
          src="https://d30b9hrf6faw09.cloudfront.net/upload/202408011800050412a2b0-e993-439f-9fd3-09f600685db0.jpeg"
          alt="shirt_image"
          width={500}
          height={500}
          className="w-full h-full rounded-lg"
        />
        <div className="absolute bottom-2 left-2 flex flex-col text-white">
          <small className="capitalize font-medium">
            plain cargo cotton shirt
          </small>
          <small>$ 30.56</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
