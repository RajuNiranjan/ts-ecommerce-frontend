import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Card className="w-[175px] md:w-[250px] md:h-[400px] p-4 hover:shadow-xl">
      <CardContent className="p-0 md:h-[300px] ">
        <Link href="/products/123">
          <Image
            src="https://d30b9hrf6faw09.cloudfront.net/upload/20240808200545WhatsApp%20Image%202024-08-08%20at%208.04.53%20PM.jpeg"
            width={500}
            height={500}
            alt=""
            className="rounded-sm shadow-lg"
          />
        </Link>
      </CardContent>
      <CardFooter className="p-0 flex flex-col items-start">
        <Link href="/" className="text-xl hover:text-red-500">
          T-shirt
        </Link>
        <p>
          <small>Fabric : </small>
          <small>Nilon</small>
        </p>
        <p className="flex gap-2 ">
          <small className="text-xl font-medium">$569</small>{" "}
          <small className="line-through text-slate-500">$899</small>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
