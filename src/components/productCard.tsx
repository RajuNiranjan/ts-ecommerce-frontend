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
      <div className="w-[200px] h-[300px] border rounded-lg overflow-hidden relative">
        <Image
          src="https://i.pinimg.com/236x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg"
          alt="shirt_image"
          width={500}
          height={500}
          className="w-full h-full "
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
