import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleProduct = () => {
  return (
    <div>
      <div className="w-full h-screen grid grid-cols-2 gap-4 text-white px-14">
        <div className="relative h-max">
          <Image
            src="https://i.pinimg.com/236x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg"
            alt="shirt_image"
            width={500}
            height={500}
            className="w-full h-full "
          />
          <div className="absolute z-40 top-10 right-10">
            <FavoriteBorderIcon />
          </div>
        </div>
        <div>
          <h1>Men Cargo cotton shirt</h1>
          <h2>$ 30.56</h2>
          {/* RALATED IMAGES */}
          <div className="flex flex-wrap gap-4">
            <div className="w-14 h-20 rounded-sm">
              <Image
                src="https://i.pinimg.com/236x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg"
                alt="shirt_image"
                width={56}
                height={80}
                className="w-full h-full "
              />
            </div>

            <div className="w-14 h-20 rounded-sm">
              <Image
                src="https://i.pinimg.com/236x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg"
                alt="shirt_image"
                width={56}
                height={80}
                className="w-full h-full "
              />
            </div>
            <div className="w-14 h-20 rounded-sm">
              <Image
                src="https://i.pinimg.com/236x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg"
                alt="shirt_image"
                width={56}
                height={80}
                className="w-full h-full "
              />
            </div>
          </div>
          {/* SIZES  */}
          <div className="w-full h-20">
            <small className="h-14 w-14 border p-2 text-lg">M</small>
          </div>

          {/* ADD TO CART */}
          <div>
            <button className="p-3 rounded-lg text-white bg-black w-full">
              Add To Cart
            </button>
          </div>

          {/* DESCRIPTION */}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            sunt tempore ea quas harum vero nemo sapiente cumque accusantium,
            excepturi adipisci assumenda maiores natus alias minima unde saepe
            voluptate culpa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
